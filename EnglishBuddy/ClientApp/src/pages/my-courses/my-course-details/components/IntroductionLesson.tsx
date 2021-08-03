import ReactHtmlParser from "react-html-parser";
import {Button} from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {useState} from "react";

export default function IntroductionLesson(props: {
  introduction: any;
  isCompletedIntroduction: boolean;
  onCourseComplete: any;
}) {
  // dialog box open state
  const [open, setOpen] = useState(false);

  // not completed course function
  const notCompletedCourse = () => {
    return (
      <div className="bg-white relative overflow-hidden shadow-sm rounded-xl mt-3 mb-3 p-3">
        {ReactHtmlParser(props.introduction)}
        <Button variant="contained"
                color="primary"
                className="p-2 bg-blue-700 mt-5 w-100 rounded-md text-center"
                onClick={() => props.onCourseComplete()}>
          Complete
        </Button>
      </div>
    );
  };

  // completed course function
  const completedCourse = () => {
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <div className="absolute flex right-0">
          <button
            className="border-r-0 
        border-l-2 border-b-2 border-t-2 
        rounded-l-full 
        border-purple-500 
        font-bold 
        text-purple-500 
        text-sm
        relative
        p-2
        px-3
        transition 
        duration-300 
        ease-in-out
        hover:bg-purple-500 
        hover:text-white"
            onClick={() => setOpen(true)}>
            Are you stuck?
          </button>
          <div className="flex absolute left-0 h-4 w-4">
            <span className="animate-ping  absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75"/>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"/>
          </div>
          {/* <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span> */}
        </div>

        <div className="absolute flex right-0 top-32">
          <button
            className="border-r-0
        border-l-2 border-b-2 border-t-2
        rounded-l-full
        border-red-500
        font-bold
        text-red-500
        text-sm
        relative
        p-2
        px-3
        transition
        duration-300
        ease-in-out
        hover:bg-red-500
        hover:text-white">
            Course history
          </button>
        </div>

        <IntroDialogBox
          open={open}
          introduction={props.introduction}
          onClose={handleClose}
        />
      </>
    );
  };

  return (
    <div>
      {props.isCompletedIntroduction ? completedCourse() : notCompletedCourse()}
    </div>
  );
}

export function IntroDialogBox(props: {
  open: boolean;
  introduction: any;
  onClose: () => void;
}) {
  const {open, introduction, onClose} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}>
      <DialogTitle id="simple-dialog-title">
        Don't worry, let's study again!
      </DialogTitle>
      {ReactHtmlParser(introduction)}
    </Dialog>
  );
}
