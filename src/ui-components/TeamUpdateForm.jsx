/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Team } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TeamUpdateForm(props) {
  const {
    id: idProp,
    team: teamModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    played: "",
    won: "",
    drawn: "",
    lost: "",
    gf: "",
    ga: "",
    gd: "",
    points: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [played, setPlayed] = React.useState(initialValues.played);
  const [won, setWon] = React.useState(initialValues.won);
  const [drawn, setDrawn] = React.useState(initialValues.drawn);
  const [lost, setLost] = React.useState(initialValues.lost);
  const [gf, setGf] = React.useState(initialValues.gf);
  const [ga, setGa] = React.useState(initialValues.ga);
  const [gd, setGd] = React.useState(initialValues.gd);
  const [points, setPoints] = React.useState(initialValues.points);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = teamRecord
      ? { ...initialValues, ...teamRecord }
      : initialValues;
    setName(cleanValues.name);
    setPlayed(cleanValues.played);
    setWon(cleanValues.won);
    setDrawn(cleanValues.drawn);
    setLost(cleanValues.lost);
    setGf(cleanValues.gf);
    setGa(cleanValues.ga);
    setGd(cleanValues.gd);
    setPoints(cleanValues.points);
    setErrors({});
  };
  const [teamRecord, setTeamRecord] = React.useState(teamModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Team, idProp)
        : teamModelProp;
      setTeamRecord(record);
    };
    queryData();
  }, [idProp, teamModelProp]);
  React.useEffect(resetStateValues, [teamRecord]);
  const validations = {
    name: [{ type: "Required" }],
    played: [{ type: "Required" }],
    won: [{ type: "Required" }],
    drawn: [{ type: "Required" }],
    lost: [{ type: "Required" }],
    gf: [{ type: "Required" }],
    ga: [{ type: "Required" }],
    gd: [{ type: "Required" }],
    points: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          played,
          won,
          drawn,
          lost,
          gf,
          ga,
          gd,
          points,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Team.copyOf(teamRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TeamUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              played,
              won,
              drawn,
              lost,
              gf,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Played"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={played}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played: value,
              won,
              drawn,
              lost,
              gf,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.played ?? value;
          }
          if (errors.played?.hasError) {
            runValidationTasks("played", value);
          }
          setPlayed(value);
        }}
        onBlur={() => runValidationTasks("played", played)}
        errorMessage={errors.played?.errorMessage}
        hasError={errors.played?.hasError}
        {...getOverrideProps(overrides, "played")}
      ></TextField>
      <TextField
        label="Won"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={won}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won: value,
              drawn,
              lost,
              gf,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.won ?? value;
          }
          if (errors.won?.hasError) {
            runValidationTasks("won", value);
          }
          setWon(value);
        }}
        onBlur={() => runValidationTasks("won", won)}
        errorMessage={errors.won?.errorMessage}
        hasError={errors.won?.hasError}
        {...getOverrideProps(overrides, "won")}
      ></TextField>
      <TextField
        label="Drawn"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={drawn}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn: value,
              lost,
              gf,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.drawn ?? value;
          }
          if (errors.drawn?.hasError) {
            runValidationTasks("drawn", value);
          }
          setDrawn(value);
        }}
        onBlur={() => runValidationTasks("drawn", drawn)}
        errorMessage={errors.drawn?.errorMessage}
        hasError={errors.drawn?.hasError}
        {...getOverrideProps(overrides, "drawn")}
      ></TextField>
      <TextField
        label="Lost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lost}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn,
              lost: value,
              gf,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.lost ?? value;
          }
          if (errors.lost?.hasError) {
            runValidationTasks("lost", value);
          }
          setLost(value);
        }}
        onBlur={() => runValidationTasks("lost", lost)}
        errorMessage={errors.lost?.errorMessage}
        hasError={errors.lost?.hasError}
        {...getOverrideProps(overrides, "lost")}
      ></TextField>
      <TextField
        label="Gf"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={gf}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn,
              lost,
              gf: value,
              ga,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.gf ?? value;
          }
          if (errors.gf?.hasError) {
            runValidationTasks("gf", value);
          }
          setGf(value);
        }}
        onBlur={() => runValidationTasks("gf", gf)}
        errorMessage={errors.gf?.errorMessage}
        hasError={errors.gf?.hasError}
        {...getOverrideProps(overrides, "gf")}
      ></TextField>
      <TextField
        label="Ga"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={ga}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn,
              lost,
              gf,
              ga: value,
              gd,
              points,
            };
            const result = onChange(modelFields);
            value = result?.ga ?? value;
          }
          if (errors.ga?.hasError) {
            runValidationTasks("ga", value);
          }
          setGa(value);
        }}
        onBlur={() => runValidationTasks("ga", ga)}
        errorMessage={errors.ga?.errorMessage}
        hasError={errors.ga?.hasError}
        {...getOverrideProps(overrides, "ga")}
      ></TextField>
      <TextField
        label="Gd"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={gd}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn,
              lost,
              gf,
              ga,
              gd: value,
              points,
            };
            const result = onChange(modelFields);
            value = result?.gd ?? value;
          }
          if (errors.gd?.hasError) {
            runValidationTasks("gd", value);
          }
          setGd(value);
        }}
        onBlur={() => runValidationTasks("gd", gd)}
        errorMessage={errors.gd?.errorMessage}
        hasError={errors.gd?.hasError}
        {...getOverrideProps(overrides, "gd")}
      ></TextField>
      <TextField
        label="Points"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={points}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              played,
              won,
              drawn,
              lost,
              gf,
              ga,
              gd,
              points: value,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || teamModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || teamModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
