import React from "react";
import { FrontCards } from "./components/FrontCards";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
};

export default function Frontpage() {
    return (
        <React.Fragment>


            <div class="grid gap-4">
                <div class="shadow-sm col-span-2">
                    <div class="grid grid-flow-col grid-cols-2 gap-4">
                        <div>1</div>
                        <div>9</div>
                    </div>


                    <div className="grid md:grid-flow-col gap-0">
                        <div className="flex  flex-row-reverse">
                            <FrontCards
                                title={"Learn Summarization Quickly"}
                                description={"Learn summarization easily"}
                                imageUrl="assets/english.jpg"
                                rating={5}
                                difficulty={"Beginner"}
                                isBestSeller={true}
                            />
                            <FrontCards
                                title={"Learn Summarization Quickly"}
                                description={"Learn summarization easily"}
                                imageUrl="assets/english.jpg"
                                rating={5}
                                difficulty={"Beginner"}
                                isBestSeller={true}
                            />
                            <FrontCards
                                title={"Learn Summarization Quickly"}
                                description={"Learn summarization easily"}
                                imageUrl="assets/english.jpg"
                                rating={5}
                                difficulty={"Beginner"}
                                isBestSeller={true}
                            />
                            <FrontCards
                                title={"Learn Summarization Quickly"}
                                description={"Learn summarization easily"}
                                imageUrl="assets/english.jpg"
                                rating={5}
                                difficulty={"Beginner"}
                                isBestSeller={true}
                            />
                            <FrontCards
                                title={"Learn Summarization Quickly"}
                                description={"Learn summarization easily"}
                                imageUrl="assets/english.jpg"
                                rating={5}
                                difficulty={"Beginner"}
                                isBestSeller={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
