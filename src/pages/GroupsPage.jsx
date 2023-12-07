import React, {useEffect, useState} from "react";
import PageContainer from "../components/Globals/PageContainer";
import GroupCardContainer from "../components/GroupSearch/GroupCardContainer";
import {useDispatch, useSelector} from "react-redux";
import {findGroups, selectGroups, selectGroupsPagination} from "../features/groups/groupSlice";
import Searchbox from "../components/UserInputs/Searchbox";
import GroupTopicFilter from "../components/GroupSearch/GroupTopicFilter";

export default function GroupsPage() {
  const {groups} = useSelector(selectGroups)
  const {currentPage, pageSize} = useSelector(selectGroupsPagination)

  const [filter, setFilter] = useState({
    groups: groups || [],
    searchTerm: ""
  })
  const dispatch = useDispatch()

  useEffect(() => {
    // if (groups.length) return
    dispatch(findGroups({page: currentPage, limit: pageSize}))
  }, [currentPage, pageSize])

  useEffect(() => {
    setFilter({
      searchTerm: "",
      groups
    })
  }, [groups])

  console.log(filter.groups)

  const handleThemeFilter = (topic) => {
    if (filter.topic === topic && !filter.searchTerm) {
      setFilter({
        searchTerm: "",
        groups: groups || []
      })
    } else if(filter.topic === topic && filter.searchTerm) {
      setFilter({
        searchTerm: filter.searchTerm,
        groups: groups.filter(group => group.name.toLowerCase().includes(filter.searchTerm.toLowerCase()))
      })
    } else if(filter.searchTerm) {
      setFilter({
        ...filter,
        topic,
        groups: groups.filter(group => group.topic === topic && group.name.toLowerCase().includes(filter.searchTerm.toLowerCase()))
      })
    } else {
      setFilter({
        ...filter,
        topic,
        groups: groups.filter(group => group.topic === topic)
      })
    }

  }
  const handleSearch = (searchTerm) => {
    if (!searchTerm && filter.topic) {
      setFilter({
        ...filter,
        searchTerm: "",
        groups: groups.filter(group => group.topic === filter.topic),
      })
    } else if (filter.topic) {
      setFilter({
        ...filter,
        searchTerm,
        groups: groups.filter(group => group.topic === filter.topic && group.name.toLowerCase().includes(searchTerm.toLowerCase()))
      })
    } else{
      setFilter({
        searchTerm,
        groups: groups.filter(group => group.name.toLowerCase().includes(searchTerm.toLowerCase()))
      })
    }
  }

  return (
    <PageContainer title={`Gruppen`}>
      <div className="w-full mt-4">
        <Searchbox
          searchTerm={filter.searchTerm}
          onSearch={handleSearch}
        />
        <GroupTopicFilter onFilter={handleThemeFilter} selectedTopic={filter.topic}/>
      </div>

      {filter.groups.length > 0 &&
        <GroupCardContainer groups={filter.groups} showGroupCount={true} />
      }
    </PageContainer>
  );
}
