import {verifyEmail} from "../../auth/authSlice";
import {updateProfile} from "../../profile/profileSlice";
import {createGroup} from "../../groups/groupSlice";

import {
  authStep,
  chooseFunnelStep,
  experienceStep,
  groupDownloadStep,
  groupInfoStep,
  groupSettingsStep,
  groupThemeStep,
  interestedInGroupsWithThemeStep,
  userProfileStep,
} from "./funnelSteps";

const chooseFunnelCreateSteps = [
  {
    ...experienceStep,
    goBackOption: false
  },
  groupThemeStep,
  groupInfoStep,
  // groupMeetingStep,
  userProfileStep,
  authStep,
  {
    ...groupSettingsStep,
    goBackOption: false,
    onSubmit: (values) => createGroup({
      name: values.groupName,
      description: values.groupDescription,
      selfModerated: values.groupSelfModerated,
      topic: values.groupTheme[0],
      // meetings: [] // todo add meeting logic, dependent on backend
    }) // todo add img
  },
  groupDownloadStep
]

const chooseFunnelFindSteps = [
  interestedInGroupsWithThemeStep,
  userProfileStep,
  authStep
]

const joinGroupFunnelSteps = [
  userProfileStep,
  {
    ...authStep,
    onSubmit: (values) => verifyEmail({
      authCode: values.authCode,
      email: values.email,
      joinedGroups: [values.groupId]
    })
  },
  {
    ...experienceStep,
    goBackOption: false,
    onSubmit: (values) => updateProfile({
      questions: {
        experience: values.experience,
        chooseFunnel: "SingUp and join group"
      },
    })
  }
]

const createGroupFunnelSteps = [
  groupThemeStep,
  groupInfoStep,
  // groupMeetingStep,
  userProfileStep,
  authStep,
  {
    ...groupSettingsStep,
    goBackOption: false,
    onSubmit: (values) => createGroup({
      name: values.groupName,
      description: values.groupDescription,
      selfModerated: values.groupSelfModerated,
      topic: values.groupTheme[0],
      // meetings: [] // todo add meeting logic, dependent on backend
    }) // todo add img
  },
  groupDownloadStep
]


const getFunnelSteps = (searchParams) => {
  const funnelNumber = searchParams.get("funnel")
  const funnelType = searchParams.get("type")
  const joinGroupId = searchParams.get("groupId")

  switch (funnelNumber){
    case "1": {
      switch (funnelType) {
        case "create":
          return {
            type: "chooseFunnelCreate",
            steps: chooseFunnelCreateSteps
          }
        default:
          return {
            type: "chooseFunnelFind",
            steps: chooseFunnelFindSteps
          }
      }
    }
    case "2":
      return {
        type: "joinGroupFunnel",
        steps: joinGroupFunnelSteps,
        joinGroupId
      }
    case "3":
      return {
        type: "createGroupFunnel",
        steps: createGroupFunnelSteps
      }
    default:
      return {
        type: "chooseFunnel",
        steps: [
          chooseFunnelStep, // actually the next steps never happen, but the page reloads and an option from switch funnel 1
          interestedInGroupsWithThemeStep,
          experienceStep,
          userProfileStep,
          authStep
        ]
      }
  }
}

export default getFunnelSteps;
