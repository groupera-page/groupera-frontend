import React from "react";
import UserInfoStep from "./StepFormComponents/UserSteps/UserInfoStep";
import VerifyCodeStep from "./StepFormComponents/UserSteps/VerifyCodeStep";
import ExperienceStep from "./StepFormComponents/UserSteps/ExperienceStep";
import GroupThemesStep from "./StepFormComponents/GroupSteps/GroupThemesStep";
import GroupInfoStep from "./StepFormComponents/GroupSteps/GroupInfoStep";
import GroupPlanStep from "./StepFormComponents/GroupSteps/GroupPlanStep";
import GroupSettingStep from "./StepFormComponents/GroupSteps/GroupSettingStep";
import GroupDownloadStep from "./StepFormComponents/GroupSteps/GroupDownloadStep";

export default function FunnelSteps(
  funnelIndex,
  userData,
  updateFields,
  updateGroupFields,
  groupData,
  resendCode,

  errorUserSecondPass
) {
  let funnelSteps = [];

  switch (funnelIndex) {
    case 1:
      funnelSteps = [
        <UserInfoStep
          {...userData}
          updateFields={updateFields}
          errorUserSecondPass={errorUserSecondPass}
        />,
        <VerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
        <ExperienceStep {...userData} updateFields={updateFields} />,
      ];
      break;
    case 2:
      funnelSteps = [
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <ExperienceStep {...userData} updateFields={updateFields} />,
        <UserInfoStep
          {...userData}
          updateFields={updateFields}
          errorUserSecondPass={errorUserSecondPass}
        />,
        <VerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
      ];
      break;
    case 3:
      funnelSteps = [
        <ExperienceStep {...userData} updateFields={updateFields} />,
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupInfoStep {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupPlanStep {...groupData} updateGroupFields={updateGroupFields} />,
        <UserInfoStep
          {...userData}
          updateFields={updateFields}
          errorUserSecondPass={errorUserSecondPass}
        />,
        <VerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
        <GroupDownloadStep {...userData} updateFields={updateFields} />,
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
          {...userData}
          updateFields={updateFields}
          errorUserSecondPass={errorUserSecondPass}
        />,
        <VerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
        <GroupDownloadStep {...userData} updateFields={updateFields} />,
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
