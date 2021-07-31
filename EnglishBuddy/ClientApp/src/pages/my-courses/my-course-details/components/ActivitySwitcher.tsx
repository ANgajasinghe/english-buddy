import React from "react";
import {ActivityModel} from "../../../../@core/models/activity";
import {Utility} from "../../../../@core/utility";
import Paraphrasing from "../../../paraphrasing";
import Summarization from "../../../summarization";
import Essay from "../../../essay";
import Voice from "../../../voice";

export default function ActivitySwitcher(props: {
  typeName: string;
  activity: ActivityModel;
}) {
  const switchActivity = () => {
    switch (props.typeName) {
      case Utility.PARAPHRASING:
        return <Paraphrasing activity={props.activity}/>;
      case Utility.SUMMARIZATION:
        return <Summarization activity={props.activity}/>;
      case Utility.VOICE:
        return <Voice activity={props.activity}/>;
      case Utility.ESSAY:
        return <Essay activity={props.activity}/>;
      default:
        return null;
    }
  };

  return <div>{switchActivity()}</div>;
}
