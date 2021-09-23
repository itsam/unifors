import React, { useState } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "survey-react/modern.css";

const selfEvaluationSurvey = {
  title: "Individual assessment on soft skills",
  description: "UNIFORS project (Erasmus+)",
  pages: [
    {
      name: "mainPage",
      elements: [
        {
          type: "html",
          name: "soft-skills",
          html: "<p style='font-size: 26px'>Personal details</p>",
        },
        {
          type: "text",
          name: "name",
          title: "Name and surname",
          description:
            "We need your name to identify and evaluate your progress",
          isRequired: true,
          score: 0,
        },
        {
          type: "radiogroup",
          name: "Country",
          title: "Country",
          isRequired: true,
          choices: [
            {
              value: "Belgium",
              text: "Belgium",
              score: 0,
            },
            {
              value: "Poland",
              text: "Poland",
              score: 0,
            },
            {
              value: "Portugal",
              text: "Portugal",
              score: 0,
            },
            {
              value: "Romania",
              text: "Romania",
              score: 0,
            },
            {
              value: "Spain",
              text: "Spain",
              score: 0,
            },
          ],
        },
        {
          type: "html",
          name: "soft-skills",
          html: "<p style='font-size: 26px'>Soft skills self-evaluation</p>",
        },
        {
          type: "radiogroup",
          name: "teamWorking",
          title: "1a. Team working",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to work together in a group",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I’m able to create a team and coordinate the different roles of the individuals",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able to work in a team, coordinate roles, and realize the usefulness of this way of working",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "timeManagement",
          title: "1b. Time management",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to analyse the way I use my time",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I’m able to identify the different tools that can help me to manage my time",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able  to use classic tools and digital tools to manage my time",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "interpersonalCommunication",
          title: "2a. Interpersonal communication",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to identify the different types of communication",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I can define the characteristics of communication and to understand the importance of effective communication",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able to communicate in an effective way",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "creativeThinking",
          title: "2b. Creative thinking",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to understand the importance of diverse and original ideas",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I’m able to appropriate the spirit and the method of the creativity techniques",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able to apply creativity techniques, to provide original solutions to a given problem",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "criticalThinking",
          title: "3a. Critical thinking",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to define and understand the concept of critical thinking",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I’m able to identify and use critical thinking skills, processes and techniques that will assist me in my personal life and career",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I have developed my ability to investigate and evaluate thinking from different viewpoints; also, identifying, analyzing and formulating solutions to problems as they arise",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "analyticalThinking",
          title: "3b. Analytical thinking",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to think in orderly and analytical way",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I can correctly identify the issue of a given task requiring a solution and hypothesized",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able to collect information necessary to solve a task, analyze it and drew logical conclusions",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "decisionMaking",
          title: "4a. Decision making",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to define and understand the sources of the most common difficulties in the decision-making process",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I’m able to define and understand the action of factors affecting the decision-making process",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I’m able to use techniques that facilitate decision making process",
              score: 3,
            },
          ],
        },
        {
          type: "radiogroup",
          name: "problemSolving",
          title: "4b. Problem-solving",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "1. I’m able to solve a problem giving a reasonable solution",
              score: 1,
            },
            {
              value: "item2",
              text: "2. I can give a solution based on following the steps given",
              score: 2,
            },
            {
              value: "item3",
              text: "3. I can give a good description of every approach followed in the different steps of a problem-solving process",
              score: 3,
            },
          ],
        },
        {
          type: "text",
          name: "score",
          visible: false,
          title: "score",
          defaultValue: 0,
          inputType: "number",
          score: 0,
        },
      ],
    },
  ],
  cookieName: "unifors_self_evaluation_survey",
  showQuestionNumbers: "off",
  clearInvisibleValues: "none",
};

let score = 0;

function sendDataToServer(survey) {
  survey.sendResult("f24e7e6f-780c-44f0-a21a-3d6345f79f15");
}

function onValueChanged(survey) {
  let totalScore = 0;
  const data = survey.data;

  Object.keys(data).forEach(function (qName) {
    if (qName === "score") return;
    var question = survey.getQuestionByName(qName);
    var qValue = data[qName];

    if (question.choices) {
      question.choices.forEach(function (choice) {
        if (choice.value === qValue) {
          totalScore += +choice.score;
        }
      });
    } else {
      totalScore += +question.score;
    }
  });

  score = totalScore;

  let scoreField = survey.getQuestionByName("score");
  scoreField.value = totalScore;
}

export function SurveyPage(props) {
  Survey.StylesManager.applyTheme("modern");
  Survey.JsonObject.metaData.addProperty("question", { name: "score:number" });
  Survey.JsonObject.metaData.addProperty("itemvalue", { name: "score:number" });

  let model = null;
  Survey.JsonObject.metaData.addProperty("question", { name: "score:number" });
  switch (props.type) {
    case "finalEvaluation":
      model = new Survey.Model(selfEvaluationSurvey); //future ready
      break;
    default:
      model = new Survey.Model(selfEvaluationSurvey);
      break;
  }

  return (
    <div className="container">
      {
        <Survey.Survey
          id={props.id}
          model={model}
          locale="en"
          onComplete={sendDataToServer}
          //data={props.data}
          //onAfterRenderQuestion={onAfterRenderQuestion}
          onValueChanged={onValueChanged}
          //css={myCss}
          //showPreviewBeforeComplete="showAllQuestions"
          //progressBarType="buttons"
        />
      }
    </div>
  );
}
