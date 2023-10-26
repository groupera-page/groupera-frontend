import React from "react";
import UserInfoStep from "./StepFormComponents/UserInfoStep";
import VerifyCodeStep from "./StepFormComponents/VerifyCodeStep";
import ExperienceStep from "./StepFormComponents/ExpStep";
import GroupThemesStep from "./StepFormComponents/GroupThemesStep";
import GroupInfoStep from "./StepFormComponents/GroupInfoStep";
import GroupPlanStep from "./StepFormComponents/GroupPlanStep";
import GroupSettingStep from "./StepFormComponents/GroupSettingStep";
import GroupDownloadStep from "./StepFormComponents/GroupDownloadStep";

function generateFunnelSteps(
  FunnelIndex,
  data,
  updateFields,
  updateGroupFields,
  isVerified,
  groupData
) {
  let funnelSteps = [];

  switch (FunnelIndex) {
    case 1:
      funnelSteps = [
        <UserInfoStep
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeStep {...data} updateFields={updateFields} />,
        <ExperienceStep {...data} updateFields={updateFields} />,
      ];
      break;
    case 2:
      funnelSteps = [
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <ExperienceStep {...data} updateFields={updateFields} />,
        <UserInfoStep
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeStep {...data} updateFields={updateFields} />,
      ];
      break;
    case 3:
      funnelSteps = [
        <ExperienceStep {...data} updateFields={updateFields} />,
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupInfoStep {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupPlanStep {...groupData} updateGroupFields={updateGroupFields} />,
        <UserInfoStep
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeStep {...data} updateFields={updateFields} />,
        <GroupDownloadStep {...data} updateFields={updateFields} />,
        <GroupSettingStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
      ];
      break;
    case 4:
      funnelSteps = [
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupInfoStep {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupPlanStep {...groupData} updateGroupFields={updateGroupFields} />,
        <UserInfoStep
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeStep {...data} updateFields={updateFields} />,
        <GroupDownloadStep {...data} updateFields={updateFields} />,
        <GroupSettingStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
      ];
      break;

    default:
      console.log("No funnel");
  }

  return funnelSteps;
}

export default generateFunnelSteps;
