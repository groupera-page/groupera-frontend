import React from "react";
import UserInfoStep from "./UserSteps/UserInfoStep";
import UserVerifyCodeStep from "./UserSteps/UserVerifyCodeStep";
import UserExperienceStep from "./UserSteps/UserExperienceStep";
import GroupThemesStep from "./GroupSteps/GroupThemesStep";
import GroupInfoStep from "./GroupSteps/GroupInfoStep";
import GroupPlanStep from "./GroupSteps/GroupPlanStep";
import GroupSettingStep from "./GroupSteps/GroupSettingStep";
import GroupDownloadStep from "./GroupSteps/GroupDownloadStep";
import GroupFinishStep from "./GroupSteps/GroupFinishStep";

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
        <UserVerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
        <UserExperienceStep {...userData} updateFields={updateFields} />,
      ];
      break;
    case 2:
      funnelSteps = [
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <UserExperienceStep {...userData} updateFields={updateFields} />,
        <UserInfoStep
          {...userData}
          updateFields={updateFields}
          errorUserSecondPass={errorUserSecondPass}
        />,
        <UserVerifyCodeStep
          {...userData}
          updateFields={updateFields}
          resendCode={resendCode}
        />,
      ];
      break;
    case 3:
      funnelSteps = [
        <UserExperienceStep {...userData} updateFields={updateFields} />,
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
        <UserVerifyCodeStep
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
        <UserVerifyCodeStep
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
    case 5:
      funnelSteps = [
        <GroupThemesStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupInfoStep {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupPlanStep {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupDownloadStep
          {...userData}
          updateFields={updateFields}
          {...groupData}
        />,
        <GroupSettingStep
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupFinishStep
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
