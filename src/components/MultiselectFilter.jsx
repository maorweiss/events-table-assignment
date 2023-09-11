import * as React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import styled from "@emotion/styled";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiselectFilter({
  options,
  selectedEventTypes,
  setSelectedEventTypes,
}) {
  const renderOption = (props, option, { selected }) => (
    <li {...props}>
      <Checkbox
        icon={icon}
        checkedIcon={checkedIcon}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {option.title}
    </li>
  );

  const  handleSelectEventType = (event, newValue) => {
    setSelectedEventTypes(newValue);
  }

  return (
    <Container>
      <InputContainer>
        <Autocomplete
          multiple
          limitTags={2}
          id="selected-event-types"
          size="small"
          value={selectedEventTypes}
          onChange={handleSelectEventType}
          options={options}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={renderOption}
          style={{ width: 400 }}
          renderInput={(params) => (
            <TextField {...params} label="Event Type Filter" />
          )}
        />
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 61px;
`;

const InputContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
