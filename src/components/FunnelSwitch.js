import React from "react";
import UserInfoStep from "./StepFormComponents/UserSteps/UserInfoStep";
import VerifyCodeStep from "./StepFormComponents/UserSteps/VerifyCodeStep";
import ExperienceStep from "./StepFormComponents/UserSteps/ExperienceStep";
import GroupThemesStep from "./StepFormComponents/GroupSteps/GroupThemesStep";
import GroupInfoStep from "./StepFormComponents/GroupSteps/GroupInfoStep";
import GroupPlanStep from "./StepFormComponents/GroupSteps/GroupPlanStep";
import GroupSettingStep from "./StepFormComponents/GroupSteps/GroupSettingStep";
import GroupDownloadStep from "./StepFormComponents/GroupSteps/GroupDownloadStep";

function generateFunnelSteps(
  FunnelIndex,
  data,
  updateFields,
  updateGroupFields,
  isVerified,
  groupData,
  resendCode
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
        <VerifyCodeStep
          {...data}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
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
        <VerifyCodeStep
          {...data}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
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
        <VerifyCodeStep
          {...data}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
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
        <VerifyCodeStep
          {...data}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
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
