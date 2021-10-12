import {useState} from "react";
import {UserRecommendationModel} from "../../../../../@core/models/userRecommendation";

export default function LessonRecommendation(props: { lessonId: any }) {

    const [recommendation, setRecommendation] = useState<UserRecommendationModel>({} as UserRecommendationModel);
    const [activeStep, setActiveStep] = useState(0);
    return (
        <div>
            
        </div>
    )
    
}