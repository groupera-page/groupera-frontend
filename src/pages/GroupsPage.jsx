import React, { useEffect, useState } from "react";
import PageContainer from "../components/Globals/PageContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  findGroups,
  selectGroups,
  selectGroupsPagination,
} from "../features/groups/groupSlice";
import Searchbox from "../components/UserInputs/Searchbox";
import GroupTopicFilter from "../components/GroupSearch/GroupTopicFilter";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { GoPlus } from "react-icons/go";

export default function GroupsPage() {
  const { groups } = useSelector(selectGroups);
  const { currentPage, pageSize, totalCount } = useSelector(
    selectGroupsPagination
  );

  const [filter, setFilter] = useState({
    groups: groups.filter(group => group.verified) || [],
    searchTerm: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (totalCount) return;
    dispatch(findGroups({ page: currentPage, limit: pageSize }));
  }, [currentPage, pageSize]);

  useEffect(() => {
    setFilter({
      searchTerm: "",
      groups: groups.filter(group => group.verified),
    });
  }, [groups]);

  const handleThemeFilter = (topic) => {
    if (filter.topic === topic && !filter.searchTerm) {
      setFilter({
        searchTerm: "",
        groups: groups.filter(group => group.verified) || [],
      });
    } else if (filter.topic === topic && filter.searchTerm) {
      setFilter({
        searchTerm: filter.searchTerm,
        groups: groups.filter((group) =>
          group.verified &&
          group.name.toLowerCase().includes(filter.searchTerm.toLowerCase())
        ),
      });
    } else if (filter.searchTerm) {
      setFilter({
        ...filter,
        topic,
        groups: groups.filter(
          (group) =>
            group.verified &&
            group.topic === topic &&
            group.name.toLowerCase().includes(filter.searchTerm.toLowerCase())
        ),
      });
    } else {
      setFilter({
        ...filter,
        topic,
        groups: groups.filter((group) => group.verified && group.topic === topic),
      });
    }
  };
  const handleSearch = (searchTerm) => {
    if (!searchTerm && filter.topic) {
      setFilter({
        ...filter,
        searchTerm: "",
        groups: groups.filter((group) => group.verified && group.topic === filter.topic),
      });
    } else if (filter.topic) {
      setFilter({
        ...filter,
        searchTerm,
        groups: groups.filter(
          (group) =>
            group.verified &&
            group.topic === filter.topic &&
            group.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      });
    } else {
      setFilter({
        searchTerm,
        groups: groups.filter((group) =>
          group.verified &&
          group.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      });
    }
  };

  return (
    <PageContainer title={`Gruppen`}>
      <div className="w-full mt-4">
        <div className="flex justify-between mt-4 lg:mt-10 mb-4">
          <h2>Gruppen</h2>
          <Link to={`group/create`}>
            <PrimaryButton>
              <div className="flex flex-row gap-2 items-center">
                <GoPlus size={20} />
                <div>Gruppe gründen</div>
              </div>
            </PrimaryButton>
          </Link>
        </div>
        <Searchbox searchTerm={filter.searchTerm} onSearch={handleSearch} />
        <GroupTopicFilter
          onFilter={handleThemeFilter}
          selectedTopic={filter.topic}
        />
      </div>

      {/* {filter.groups.length > 0 && ( */}
      <GroupCardContainer groups={filter.groups} showGroupCount={true} />
      {/* )} */}
    </PageContainer>
  );
}
