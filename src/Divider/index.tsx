import Divider from "@mui/material/Divider";

type IProps = {
  [key: string]: any; // Allow any other additional props
};

export default function DividerComponent({ ...otherProps }: IProps) {
  return <Divider {...otherProps} />;
}
