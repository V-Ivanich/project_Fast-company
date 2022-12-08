import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookMark";
import QualitiesList from "./qualitiesList";
import Table from "./table";

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      icons: "down"
    },

    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />
    },

    profession: {
      path: "profession.name",
      name: "Профессия",
      icons: "down"
    },

    completedMeetings: {
      path: "completedMeetings",
      name: "Встреч,кол-во",
      icons: "down"
    },

    rate: {
      path: "rate",
      name: "Оценка",
      icons: "down"
    },

    bookmark: {
      path: "bookmark",
      name: "Избранное",
      icons: "down",
      component: (user) => (
        <BookMark
          onClick={() => onToggleBookMark(user._id)}
          status={user.bookmark}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger rounded-pill"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      )
    }
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default UserTable;