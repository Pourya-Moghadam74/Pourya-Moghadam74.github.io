import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
  Box,
  Field,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Portal,
  createListCollection,
  Alert,
  Spinner,
  Text
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const frameworks = createListCollection({
    items: [
      { label: "Freelance project proposal", value: "hireMe" },
      { label: "Open source consultancy session", value: "openSource" },
      { label: "Other", value: "other" },
    ],})
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: values => submit("https://api.example.com/contact", values),
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, 'Name must be at most 20 characters').required('Required'),
      email: Yup.string().email('Invalid Email address').required('Required'),
      type: Yup.string()
        .transform((val) => (Array.isArray(val) ? val[0] : val))
        .oneOf(["hireMe", "openSource", "other"])
        .required("Please select a type"),
      comment: Yup.string().required('Required')
      })
    });
    useEffect(() => {
        if (response?.type === "success") formik.resetForm();
      }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <Field.Root invalid={formik.touched.firstName && formik.errors.firstName}>
                <Field.Label htmlFor="firstName">Name</Field.Label>
                <Input {...formik.getFieldProps('firstName')}
                />
                <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={formik.touched.email && formik.errors.email}>
                <Field.Label htmlFor="email">Email Address</Field.Label>
                <Input {...formik.getFieldProps('email')}
                />
                <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
              </Field.Root>
              <Field.Root invalid={formik.touched.type && !!formik.errors.type}>
                <Field.Label htmlFor="type">Type of enquiry</Field.Label>
                    <Select.Root 
                    collection={frameworks}
                    name="type"
                    id="type"
                    value={formik.values.type ? [formik.values.type] : []}
                    onValueChange={({ value }) => {
                      const next = Array.isArray(value) ? value[0] : value; // single-select normalize
                      formik.setFieldValue("type", next ?? "", true);       // ← validate now (3rd arg = shouldValidate)
                      formik.setFieldTouched("type", true, false);          // ← mark touched (no extra validate needed)
                    }}

                    >
                    <Select.HiddenSelect name="type" />
                      <Select.Control>
                        <Select.Trigger>
                          <Select.ValueText placeholder="Select type"/>
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                          <Select.Indicator />
                        </Select.IndicatorGroup>
                      </Select.Control>
                      <Portal>
                        <Select.Positioner>
                          <Select.Content>
                            {frameworks.items.map((framework) => (
                              <Select.Item item={framework} key={framework.value}>
                                {framework.label}
                                <Select.ItemIndicator />
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select.Positioner>
                      </Portal>
                      <Field.ErrorText>{formik.errors.type}</Field.ErrorText>
                    </Select.Root>
              </Field.Root>
              <Field.Root  invalid={formik.touched.comment && !!formik.errors.comment}>
                <Field.Label htmlFor="comment">Your message</Field.Label>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <Field.ErrorText>{formik.errors.comment}</Field.ErrorText>
              </Field.Root>
              <Button type="submit" colorPalette="purple" width="full" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
