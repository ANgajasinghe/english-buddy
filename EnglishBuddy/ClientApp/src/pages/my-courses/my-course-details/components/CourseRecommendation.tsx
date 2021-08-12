import {useEffect, useState} from "react";
import {Add, Get} from "../../../../@core/api-base";
import {UserRecommendationModel} from "../../../../@core/models/userRecommendation";
import {Button, Step, StepContent, StepLabel, Stepper,} from "@material-ui/core";
import ActivitySwitcher from "./ActivitySwitcher";
import {useAppSelector} from "../../../../@core/app-store/hooks";
import ExtraLessons from "./ExtraLessons";
import SampleQandA from "./SampleQandA";
import Comment from "../../../comment";
import a1 from "../../../voice/components/a1.png";
import {Link} from "react-router-dom";

export function CourseRecommendation(props: { courseId: any }) {
  const [recommendation, setRecommendation] = useState<UserRecommendationModel>({} as UserRecommendationModel);
  // const [answer, setAnswer] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const {isEvaluated, activityResult} = useAppSelector((state) => state.evaluation);

  const loadRecommendations = async (courseId: number) => {
    try {
      const response = (await Get(["UserRecommendation", courseId.toString()])) as UserRecommendationModel;
      console.log(response);
      setRecommendation(response);
      setActiveStep(0);
    } catch (err) {
      alert("Error");
    }
  };

  useEffect(() => {
    const asyncHub = async () => {
      await loadRecommendations(props.courseId);
    };
    asyncHub().then(() => {
    });
  }, [props.courseId]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const activitySubmit = async (state: number) => {
    try {
      await Add(["ActivityResults", state.toString()], activityResult);
      const response = (await Get(["UserRecommendation", props.courseId.toString()])) as UserRecommendationModel;
      setRecommendation(response);
      setActiveStep(0);
    } catch (err) {
      alert("Error");
    }
  };

  const getStepData = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className="mb-3">
            <ActivitySwitcher typeName={recommendation?.typeName}
                              activity={recommendation?.activity1}/>


            <Comment/>

            <Button disabled={!isEvaluated}
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      activitySubmit(1)
                    }>
              Next
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="mb-3">
            <ActivitySwitcher typeName={recommendation?.typeName}
                              activity={recommendation?.activity2}/>


            <Comment/>

            <Button disabled={!isEvaluated}
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      activitySubmit(2)
                    }>
              Next
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="mb-3">

            <div>
              <SampleQandA data={recommendation.samplesQuestion}/>
              <div>
                <Button disabled={activeStep === 0}
                        onClick={handleBack}
                        className="me-2">
                  Back
                </Button>

                <Comment/>


                <Button variant="contained"
                        color="primary"
                        onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="mb-3">
            <ExtraLessons extraLesson={recommendation.extraLesson}/>


            <div className="mt-4">
              <Button disabled={activeStep === 0}
                      onClick={handleBack}
                      className="me-2">
                Back
              </Button>


              <Comment/>

              <Button variant="contained" color="primary" onClick={handleNext}>
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
        return "Please complete this activity.";
      case 2:
        return "Please complete this activity.";
      case 3:
        return "Please study these model answers before the next activity.";
      case 4:
        return "Please study these extra materials before the next activity.";
      default:
        break;
    }
  };

  const renderHtml = () => {
    return (
      <div>
        {recommendation?.steps != null && recommendation?.steps[0] !== 5 ? (
          <Stepper activeStep={activeStep} orientation="vertical">
            {
              recommendation?.steps?.map((label) => (
                <Step key={label}>
                  <StepLabel>{getStepLabel(label)}</StepLabel>
                  <StepContent>{getStepData(label)}</StepContent>
                </Step>
              ))
            }
          </Stepper>
        ) : (
          <div className='flex justify-center pt-10 mb-5'>
            <div className='bg-white rounded-lg p-5 text-center'>
              <div className='flex justify-center'>
                <img src={a1} alt=''/>
              </div>
              <p className='mt-5 font-bold text-5xl text-yellow-500'>
                Congratulations!
              </p>
              <p className='mt-5 font-semibold text-4xl text-blue-900'>
                You have completed this course. Keep it up!
              </p>
              <Link to={"/dashboard"}>
                <Button variant="contained"
                        className="mt-5"
                        color="primary"
                        onClick={handleNext}>
                  Go to Profile
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      {
        Object.keys(recommendation).length > 0 ? (
          renderHtml()
        ) : (
          <div className='mt-2'>Loading...</div>
        )
      }
    </div>
  );
}
