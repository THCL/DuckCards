const TaskInfo = ({
  notes
}) => {
  return (
    <div>
      <textarea rows="4" cols="50">
        Notes
      </textarea>
      {notes}
    </div>
  );
};

export TaskInfo;