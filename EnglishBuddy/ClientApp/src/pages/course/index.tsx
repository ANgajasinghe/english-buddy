import {useEffect, useState} from 'react';
import './style.css';
import {UserRecommendationModel} from '../../@core/models/userRecommendation';
import {Add, Get} from '../../@core/api-base';
import {useParams} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import {Button, Step, StepContent, StepLabel, Stepper, TextareaAutosize,} from '@material-ui/core';
import ActivityHistory from './activityHistory';

export default function Course() {
  const {courseId}: any = useParams();

  const [recommendation, setRecommendation] = useState<UserRecommendationModel>(
    {} as UserRecommendationModel
  );

  const [activeStep, setActiveStep] = useState(0);

  const [answer, setAnswer] = useState('');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const activitySubmit = async (id: number, state: number) => {
    const response = (await Add(['EvaluateActivity'], {
      id,
      answer,
      state,
      courseId,
    })) as UserRecommendationModel;
    setRecommendation(response);
    setActiveStep(0);
  };

  const loadRecommendations = async (courseId: number) => {
    try {
      const response = (await Get([
        'UserRecommendation',
        courseId.toString(),
      ])) as UserRecommendationModel;
      setRecommendation(response);
      setActiveStep(0);
    } catch (err) {
      alert('Error');
    }
  };

  const getStepData = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className='mb-3'>
            <hr/>
            <h6>
              Please read the introduction lesson and answer the question{' '}
            </h6>
            <div>
              <b>{recommendation.activity1.title}</b>
              <TextareaAutosize className='w-100 mt-2'
                                aria-label='minimum height'
                                rowsMin={3}
                                onChange={(e) => setAnswer(e.target.value)}
                                placeholder='Please type your answer here'/>
              <hr/>
              <div>
                <Button disabled={activeStep === 0}
                        onClick={handleBack}
                        className='me-2'>
                  Back
                </Button>
                <Button disabled={answer === ''}
                        variant='contained'
                        color='primary'
                        onClick={() => activitySubmit(recommendation.activity1.id, 1)}>
                  Submit Answer
                </Button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='mb-3'>
            <hr/>
            <h6>Well done please read the question and add your answer :)</h6>
            <div>
              <b>{recommendation.activity2.title}</b>
              <TextareaAutosize className='w-100 mt-2'
                                aria-label='minimum height'
                                rowsMin={3}
                                placeholder='Please type your answer here'/>
              <hr/>
              <div>
                <Button disabled={activeStep === 0}
                        onClick={handleBack}
                        className='me-2'>
                  Back
                </Button>
                <Button disabled={answer === ''}
                        variant='contained'
                        color='primary'
                        onClick={() => activitySubmit(recommendation.activity2.id, 2)}>
                  Submit Answer
                </Button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='mb-3'>
            <hr/>
            <h6>Please fo through these examples</h6>
            <div>
              <b>{recommendation.samplesQuestion?.questions}</b>

              <hr/>
              <div>
                <Button disabled={activeStep === 0}
                        onClick={handleBack}
                        className='me-2'>
                  Back
                </Button>
                <Button variant='contained'
                        color='primary'
                        onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className='mb-3'>
            <hr/>
            <h6>Please go through these extra lessons.</h6>
            {
              recommendation.lessons?.map((lesson) => (
                <div>
                  <p>{lesson.title}</p>
                  <hr/>
                </div>
              ))
            }
            <hr/>
            <hr/>
            <div>
              <Button disabled={activeStep === 0}
                      onClick={handleBack}
                      className='me-2'>
                Back
              </Button>
              <Button variant='contained'
                      color='primary'
                      onClick={handleNext}>
                Next
              </Button>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1:
        return 'Please complete this activity.';
      case 2:
        return 'Please complete this activity.';
      case 3:
        return 'Please study these model answers before the next activity.';
      case 4:
        return 'Please study these extra materials before the next activity.';
      default:
        break;
    }
  };

  useEffect(() => {
    const asyncHub = async () => {
      await loadRecommendations(courseId);
    };
    asyncHub().then(() => {
    });
  }, []);

  return (
    <div className='mt-4'>
      <h3>{recommendation?.message}</h3>
      <hr/>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='stroller-section'>
            {
              ReactHtmlParser(recommendation.introduction)
            }
          </div>
        </div>
        <div className='col-sm-6'>
          {
            recommendation?.steps != null && recommendation?.steps[0] !== 5 ? (
              <Stepper activeStep={activeStep}
                       orientation='vertical'>
                {
                  recommendation?.steps?.map((label) => (
                    <Step key={label}>
                      <StepLabel>
                        {getStepLabel(label)}
                      </StepLabel>
                      <StepContent>
                        {getStepData(label)}
                      </StepContent>
                    </Step>
                  ))
                }
              </Stepper>
            ) : (
              <div>You have successfully completed the task.</div>
            )
          }
        </div>
      </div>
      <hr/>
      <div className='row'>
        <h3>Course History</h3>
        <div className='mt-4'>
          <h6>Activity History</h6>
          {recommendation.activities?.map((activity) => (
            <ActivityHistory/>
          ))}
        </div>
      </div>
      <hr/>
      <hr/>
    </div>
  );
}
