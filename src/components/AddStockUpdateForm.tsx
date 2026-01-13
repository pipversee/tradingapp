"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import dynamic from "next/dynamic"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card"
import {
  Field, FieldError, FieldGroup, FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useCreateLesson, useCreateStockUpdate, useCreateTrade } from "@/hooks/react-query/queries"
import { redirect } from "next/navigation"
import { lessonSchema } from "@/validation/lessonValidation"
import { Textarea } from "./ui/textarea"
import { Models } from "appwrite"
import FileUploader from "./FileUploader"
import { stockUpdateSchema } from "@/validation/stockUpdateValidation"


const Editor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.Editor), {
  ssr: false,
  loading: () => <div className="h-64 w-full bg-muted animate-pulse border rounded-md" />
});



export function AddStockUpdateForm({ lesson }: any) {
  const { mutateAsync: addStockUpdate } = useCreateStockUpdate()

  const form = useForm<z.infer<typeof stockUpdateSchema>>({
    resolver: zodResolver(stockUpdateSchema),
    defaultValues: {
      updateTitle: "",
      updateStockSymbol: "",
      expectedReturn: "",
      file: [],
      updateReadTime: "",
      updateContent: "",
    },
  })

  async function onSubmit(data: z.infer<typeof stockUpdateSchema>) {
    await addStockUpdate(data)

    toast('Stock Update Added Successfully')

    form.reset()
    redirect('/stock-updates')
  }

  return (
    <Card className="w-full border-white/14 font-sans">
      <CardHeader>
        <CardTitle>Stock Update details</CardTitle>
        <CardDescription>
          Enter the details of your update about stock.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} >
          <FieldGroup>
            <Controller
              name="updateTitle"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Stock Update Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter title of the update"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="updateStockSymbol"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Stock Symbols
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. NVDA, GOOG, AAPL"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="file"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Add Image
                  </FieldLabel>
                  <FileUploader fieldChange={field.onChange} mediaUrl={lesson?.imageUrl} />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="grid grid-cols-1 gap-4 w-full md:grid-cols-2">

              <Controller
                name="expectedReturn"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Expected Return (Return, Duration)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 87% return in 3-4 years"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="updateReadTime"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Stock Update Read-Time
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter the readtime (in minutes)"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="updateContent"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Stock Update Content
                  </FieldLabel>

                  <Editor
                    apiKey='zdd76fi6ba0vt6hzzv1pi772txghe6f6vpjtzcgl9q3bzlt6'
                    value={field.value}
                    onEditorChange={(content) => {
                      field.onChange(content)
                    }}
                    init={{
                      plugins: [
                        // Core editing features
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                      ],
                      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                      tinycomments_author: 'Author name',
                      mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                      ],
                      uploadcare_public_key: '59fab5228e911aeb29a1',
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <div className="w-full flex flex-end justify-end items-end">
        <CardFooter>
          <Field orientation="horizontal">
            <Button type="submit" form="form-rhf-demo">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </div>
    </Card>
  )
}