import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import PageContainer from "../components/Globals/PageContainer";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import OverviewGroupItem from "../components/Overview/OverviewGroupItem";

import {selectAuth} from "../features/auth/authSlice";
import {findProfile} from "../features/profile/profileSlice";
import OverviewNextEvent from "../components/Overview/OverviewNextEvent";

const OverviewCard = ({title, desc, children}) => (
  <div className={"flex w-full p-2.5 lg:px-4 lg:pt-2 flex-col rounded-md shadow-md border"}>
    <div>
      <h4>{title}</h4>
      {desc && <div className="paragraph-sm lg:paragraph-sm text-TEXT_GRAY">{desc}</div>}
    </div>
    {children}
  </div>
)

const Home = () => {
  const {user} = useSelector(selectAuth)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(findProfile())
  }, [])

  if (!user?.joinedGroups) {
    return <div>Loading…</div>
  }

  const allUserGroups = [...user.joinedGroups, ...user.moderatedGroups]

  return (
    <PageContainer>
      <div className="w-full h-full lg:pr-20 ">
        <div className="flex flex-col mt-14 lg:mt-11">
          <h6>{`Hallo ${user.alias}`}</h6>
          <div className="paragraph-sm md:paragraph-lg">
            hier sind alle wichtigen Infos für dich zusammengestellt.
          </div>
        </div>
        {

        }
        <div className="flex flex-col lg:flex-row-reverse gap-2 lg:gap-11 mt-6 md:mt-10">
          <div className="lg:w-1/2">
            <OverviewCard
              title={
                user.nextEvents?.length > 0
                  ? "Dein nächster Termin"
                  : "Keine Termine"
              }
              desc={
                user.nextEvents?.length > 0
                  ? ""
                  : "Du hast dich noch für keinen Termin angemeldet. "
              }
            >
              <OverviewNextEvent groups={allUserGroups} />
            </OverviewCard>
          </div>

          <div className="lg:w-1/2">
            <OverviewCard
              title={"Deine Gruppen"}
              desc={
                user.joinedGroups?.length > 0
                  ? "Über die Gruppen kannst du dich für die nächsten Termine anmelden."
                  : "Du bist noch keiner Gruppe beigetreten. "
              }
            >
              {
                allUserGroups.length > 0 && allUserGroups.map((group) => <OverviewGroupItem group={group}/>)
              }
              <div className="flex flex-col items-center mt-4 mb-2 ">
                <Link to={`/groups`}>
                  <PrimaryButton isLarge={true}> Gruppen finden</PrimaryButton>
                </Link>
              </div>
            </OverviewCard>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Home;
