import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findUsers, selectUsersPagination, setCurrentPage} from "./userSlice";
import "./pagination.css"
import PageContainer from "../../components/Globals/PageContainer";

const AdminOverview = () => {
	const dispatch = useDispatch();
	const {loading, error, users} = useSelector(state => state.users)
	const {currentPage, pageSize, totalCount} = useSelector(selectUsersPagination)

	useEffect(() => {
		dispatch(findUsers({page: currentPage, limit: pageSize}));
	}, [dispatch, currentPage, pageSize]);

	// Rest of your component code...

	const handlePageClick = (e, pageIndex) => {
		dispatch(setCurrentPage(pageIndex + 1));
	};

	const renderTableData = () => {
		return users.map((user, index) => (
			<tr key={index}>
				<td>{user.alias}</td>
				<td>{user.email}</td>
				<td>{user.gender}</td>
				<td>{user.joinedGroups?.length > 0 ? user.joinedGroups.map(g => g.name).join(", ") : "none yet"}</td>
				<td>{user.moderatedGroups?.length > 0 ? user.moderatedGroups.map(g => g.name).join(", ") : "none yet"}</td>
				{/* Add other data fields as needed */}
			</tr>
		));
	};

	const renderPagination = () => {
		const pageNumbers = [];
		for (let i = 0; i < Math.ceil(totalCount / pageSize); i++) {
			pageNumbers.push(i);
		}

		// debugger
		return pageNumbers.map(number => (
			<li key={number} className={number + 1 === currentPage ? 'active' : ''} onClick={(e) => handlePageClick(e, number)}>
				{number + 1}
			</li>
		));
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<PageContainer>
			<table>
				<thead>
				<tr>
					<th>Alias</th>
					<th>Email</th>
					<th>Gender</th>
					<th>Joined Groups</th>
					<th>Moderating Groups</th>
					{/* Add other headers as needed */}
				</tr>
				</thead>
				<tbody>
				{renderTableData()}
				</tbody>
			</table>
			<ul className="pagination">
				{renderPagination()}
			</ul>
		</PageContainer>
	);
};

export default AdminOverview;
