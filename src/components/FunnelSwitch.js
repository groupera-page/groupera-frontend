import React from "react";
import UserInfoStep from "./FormComponents/UserInfoStep";
import VerifyCodeStep from "./FormComponents/VerifyCodeStep";
import ExperienceStep from "./FormComponents/ExpStep";
import GroupThemesStep from "./FormComponents/GroupThemesStep";
import GroupInfoStep from "./FormComponents/GroupInfoStep";
import GroupPlanStep from "./FormComponents/GroupPlanStep";
import GroupSettingStep from "./FormComponents/GroupSettingStep";
import GroupDownloadStep from "./FormComponents/GroupDownloadStep";

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
        <GroupSettingStep {...data} updateFields={updateFields} />,
      ];
      break;
    default:
      console.log("No funnel");
  }

  return funnelSteps;
}

export default generateFunnelSteps;
