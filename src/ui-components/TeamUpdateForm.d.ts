/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Team } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamUpdateFormInputValues = {
    name?: string;
    played?: number;
    won?: number;
    drawn?: number;
    lost?: number;
    gf?: number;
    ga?: number;
    gd?: number;
    points?: number;
};
export declare type TeamUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    played?: ValidationFunction<number>;
    won?: ValidationFunction<number>;
    drawn?: ValidationFunction<number>;
    lost?: ValidationFunction<number>;
    gf?: ValidationFunction<number>;
    ga?: ValidationFunction<number>;
    gd?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamUpdateFormOverridesProps = {
    TeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    played?: PrimitiveOverrideProps<TextFieldProps>;
    won?: PrimitiveOverrideProps<TextFieldProps>;
    drawn?: PrimitiveOverrideProps<TextFieldProps>;
    lost?: PrimitiveOverrideProps<TextFieldProps>;
    gf?: PrimitiveOverrideProps<TextFieldProps>;
    ga?: PrimitiveOverrideProps<TextFieldProps>;
    gd?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    team?: Team;
    onSubmit?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues;
    onSuccess?: (fields: TeamUpdateFormInputValues) => void;
    onError?: (fields: TeamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamUpdateFormInputValues) => TeamUpdateFormInputValues;
    onValidate?: TeamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamUpdateForm(props: TeamUpdateFormProps): React.ReactElement;
