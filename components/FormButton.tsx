"use client"

import { Button } from "./ui/button";
import { ButtonLoading } from "./ButtonLoading";

interface FormButtonProps {
  isSubmitting: boolean;
}

const FormButton = ({isSubmitting}: FormButtonProps ) => {
  return (
    !isSubmitting ? (
      <Button type="submit">Submit</Button>
    ): (
      <ButtonLoading />
    )
  )
}

export default FormButton