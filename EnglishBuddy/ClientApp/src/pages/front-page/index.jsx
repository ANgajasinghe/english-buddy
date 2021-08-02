import React from "react";
import {FrontCards} from "./components/FrontCards";
import home1 from "./homeimage1.png";
import Button from '@material-ui/core/Button';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export default function Frontpage() {
  return (
    <React.Fragment>
      <div>
        <div className="shadow-sm py-2">
          <div className="grid grid-cols-5">
            <div className="px-10 col-span-3 py-40">
              <div><span className="font-extrabold text-8xl text-yellow-500">ENGLISH</span><span
                className="font-extrabold text-8xl text-blue-600"> BUDDY</span></div>
              <span className="font-bold text-5xl py-18">World <span
                className="font-extrabold text-6xl text-yellow-500">#1</span> Online English Learning Platform</span>
              <div className="font-semibold text-3xl py-4 text-blue-600">LET THE WHOLE WORLD LISTEN TO YOU</div>
              <div className="text-2xl  py-3 font-semibold">Free online access with free courses</div>
              <div className="flex">
                <div className="mr-7"><Button variant="contained" size="large" color="primary">SIGN UP NOW</Button>
                </div>
                <Button variant="contained" size="large" color="primary">CLICK TO LOGIN</Button></div>
            </div>
            <div className="col-span-2  py-20">
              <div>
                <img src={home1} alt=''/>
              </div>
            </div>
          </div>

          <div className="px-5 font-bold text-3xl py-3">LATEST COURSES</div>
          <div className="grid md:grid-flow-col">
            <div className="flex flex-row px-5">
              <FrontCards
                title={"Essay Writing Basics"}
                description={"Let's learn how to write essays"}
                imageUrl="assets/2.jpg"
                rating={5}
                difficulty={"Intermediate"}
                isBestSeller={true}
              />
              <FrontCards
                title={"Paraphrasing Basics"}
                description={"Paraphrasing basics in easy way"}
                imageUrl="assets/4.webp"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
              <FrontCards
                title={"Advanced IELTS Speaking"}
                description={"Let's learn how to speak fearlessly"}
                imageUrl="assets/1.png"
                rating={5}
                difficulty={"Advanced"}
                isBestSeller={true}
              />
              <FrontCards
                title={"Summarization Basics"}
                description={"Let's learn how to do summarization"}
                imageUrl="assets/5.jpg"
                rating={5}
                difficulty={"Beginner"}
                isBestSeller={true}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4 py-6">
          <div class="col-start-2 col-span-4">
            <p className="font-bold text-3xl text-center py-3">CATEGORIES</p>
            <p className="text-center py-3 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.rum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.rum
            </p>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4 py-9">
          <div class="col-start-3 col-span-4">
            <div class="grid grid-cols-4 gap-4">
              <div className="shadow-sm">
                <img src={home1} alt=''/>
              </div>
              <div className="shadow-sm">
                <img src={home1} alt=''/>
              </div>
              <div className="shadow-sm ">
                <img src={home1} alt=''/>
              </div>
              <div className="shadow-sm">
                <img src={home1} alt=''/>
              </div>
            </div>
          </div>
        </div>


        <div className="shadow-sm px-5">

          <div className="grid grid-cols-6 gap-4 py-5">
            <div class="col-start-2 col-span-4">
              <p className="font-bold text-3xl text-center py-3">OUR FEATURES</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <ul className="list-inside bg-rose-200  text-left text-xl">
              <li className="py-3">Transcending the traditional “one-size-fits-all” learning model</li>
              <li className="py-3">New personalized e-learning model based on user strengths and weaknesses</li>
              <li className="py-3">Dynamically varying course content</li>
              <li className="py-3">Lesson and activity recommendation according to user feedback</li>
            </ul>


            <div>9</div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>1</div>

            <ul className="list-inside bg-rose-200 text-right text-xl">
              <li className="py-3">Practicing word pronunciations in paragraphs</li>
              <li className="py-3">Evaluations not depending on user’s accent</li>
              <li className="py-3">Starting the training at phoneme level</li>
              <li className="py-3">Teaching how to rectify mispronunciations</li>
              <li className="py-3">Personalized pronunciation training based on previous mistakes</li>
            </ul>

          </div>

          <div className="grid grid-cols-2 gap-4">
            <ul class="list-inside bg-rose-200 text-left text-xl">
              <li className="py-3">Providing instantaneous evaluations for subjective answers</li>
              <li className="py-3">Grammatical and spelling mistakes detection</li>
              <li className="py-3">Measuring the relevancy of the student answer</li>
              <li className="py-3">Measuring the subjectivity and polarity (sentiment) scores</li>
            </ul>


            <div>9</div>
          </div>


        </div>


      </div>
    </React.Fragment>
  )
}
