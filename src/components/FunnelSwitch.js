import React from "react";
import UserForm from "./FormComponents/UserForm";
import VerifyCodeForm from "./FormComponents/VerifyCodeForm";
import ExperienceForm from "./FormComponents/ExpForm";
import GroupThemesForm from "./FormComponents/GroupThemesForm";
import GroupInfoForm from "./FormComponents/GroupInfoForm";
import GroupPlanForm from "./FormComponents/GroupPlanForm";

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
        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
        <ExperienceForm {...data} updateFields={updateFields} />,
      ];
      break;
    case 2:
      funnelSteps = [
        <GroupThemesForm
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <ExperienceForm {...data} updateFields={updateFields} />,
        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
      ];
      break;
    case 3:
      funnelSteps = [
        <ExperienceForm {...data} updateFields={updateFields} />,
        <GroupThemesForm
          {...groupData}
          updateGroupFields={updateGroupFields}
        />,
        <GroupInfoForm {...groupData} updateGroupFields={updateGroupFields} />,
        <GroupPlanForm {...groupData} updateGroupFields={updateGroupFields} />,
        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
      ];
      break;
    default:
      console.log("No funnel");
  }

  return funnelSteps;
}

export default generateFunnelSteps;
