import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AudioAnalyzer from '../components/AudioAnalyzer';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {Utility} from '../../../@core/utility';
import {Add} from "../../../@core/api-base";
import {useAppSelector} from "../../../@core/app-store/hooks";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleDialog(props) {
  const appUser = useAppSelector((state) => state.auth.applicationUser);
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [data, setData] = useState('');
  const [rymings, setRymings] = useState('');
  const [ipaTranscription, setIpaTranscription] = useState('');
  const [practiceResults, setPracticeResults] = useState('');
  const [resultStatement, setResultStatement] = useState('');

  useEffect(() => {
    setIpaTranscription(props.result.pronounced_word)
    getSynonym(props.word).then(() => {
    })
  }, [props.result.pronounced_word, props.word])


  const {onClose, selectedValue, open} = props;
  const childToParent = (childdata) => {

    setData(childdata[0].result.pronounced_word);
    setPracticeResults(childdata[0])

    if ((childdata[0].word === props.word) && (childdata[0].result.correctness[0] === 1)) {
      setResultStatement('Excellent. Well done ' + appUser.firstName)
    }
    if ((childdata[0].word === props.word) && (childdata[0].result.correctness[0] === 0)) {
      setResultStatement('Almost correct. You can do it')
    }
    if ((childdata[0].word !== props.word)) {
      setResultStatement("Not Matching. Let's try again")
    }

  }

  const list = []

  for (let key in ipaTranscription) {
    list.push(ipaTranscription[key])
  }

  const listPractice = []

  for (let key in data) {
    listPractice.push(data[key])
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  async function getSynonym(word) {

    const data = {
      word: word
    }
    try {
      const response = await Add([Utility.AUDIO_TEXT_TRANSCRIPTION_API_URL, 'findRhymings'], data);
      setRymings(response)
    } catch (error) {
      console.log(error);
    }
  }

  // let audio = new Audio("")

  const start = () => {
    // audio.play()
    console.log(listPractice)
  }

  async function getNativeSpeech(word) {
    const data = {
      word: word
    }
    try {
      const response = await Add([Utility.AUDIO_TEXT_TRANSCRIPTION_API_URL, 'tts'], data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  function clear() {

  }


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} fullWidth="lg" maxWidth="lg">
      <DialogTitle id="simple-dialog-title">Let's practice words</DialogTitle>
      <div className="grid grid-cols-2 gap-4">
        <div className="shadow-sm m-3">
          <AudioAnalyzer childToParent={childToParent} clear={clear}/>
        </div>

        <div className="shadow-sm m-3">
          <React.Fragment>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <b>ACTIVITY RESULTS: "{props.word}"</b>
                  <Divider variant="left" style={{border: '1px solid'}}/>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  i.p.a transcript
                </Typography>
                <Typography variant="h5" component="h2">
                  <div className="flex flex-wrap gap-2  mx-4">
                    {list.map((word) => {
                        if (word.isVowel === 1) {
                          if (word.isCorrect === 1) {
                            return (<React.Fragment>
                              <div className="text-yellow-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                          }
                          if (word.isCorrect === 0) {
                            return (<React.Fragment>
                              <div className="text-red-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                          }
                          return (
                            <React.Fragment/>
                          )
                        }
                        if (word.isVowel === 0) {

                          return (
                            <React.Fragment>
                              <div className="text-green-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                        }
                        return <React.Fragment/>
                      }
                    )}
                  </div>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  rhyming words
                </Typography>
                <Typography variant="body2" component="p">
                  <div className="text-green-500 m-0.5 cursor-pointer" onClick={() => {
                    getSynonym('dog').then(() => {
                    })
                  }}>
                    {bull}{rymings[0]}
                    <br/>
                    {bull}{rymings[1]}
                    <br/>
                    {bull}{rymings[2]}
                    <br/>
                    {bull}{rymings[3]}
                    <br/>
                    {bull}{rymings[4]}
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" color="primary" onClick={() => getNativeSpeech(props.word)}>NATIVE SPEAK</Button>
                <Button size="large" color="primary" onClick={() => start()}>YOUR SPEAK</Button>
              </CardActions>
            </Card>
            <br/>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <b>PRACTICE RESULTS </b>
                  <Divider variant="left" style={{border: '1px solid'}}/>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  you said
                </Typography>
                <Typography variant="body2" component="p">
                  {practiceResults.word}
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  i.p.a transcript
                </Typography>
                <Typography variant="h5" component="h2">
                  <div className="flex flex-wrap gap-2  mx-4">
                    {listPractice.map((word) => {
                        if (word.isVowel === 1) {
                          if (word.isCorrect === 1) {
                            return (<React.Fragment>
                              <div className="text-yellow-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                          }
                          if (word.isCorrect === 0) {
                            return (<React.Fragment>
                              <div className="text-red-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                          }
                          return (
                            <React.Fragment/>
                          )
                        }
                        if (word.isVowel === 0) {

                          return (
                            <React.Fragment>
                              <div className="text-green-500 m-0.5 cursor-pointer">{word.letter}</div>
                              <div>{bull}</div>
                            </React.Fragment>)
                        }
                        return <React.Fragment/>
                      }
                    )}
                  </div>
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  result
                </Typography>
                <Typography variant="h6" component="h6">
                  <div className="flex flex-wrap gap-2  mx-4 text-green-500 m-0.3">
                    {resultStatement}
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </React.Fragment>
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  result: PropTypes.object,
  word: PropTypes.any
};

const PopUpBox = props => {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.name}
      </div>
      <SimpleDialog open={open} result={props.result} word={props.name} onClose={handleClose}/>
    </div>
  );
}

export default PopUpBox;
