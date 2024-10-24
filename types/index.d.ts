declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

declare type SignUpProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address1: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
};
