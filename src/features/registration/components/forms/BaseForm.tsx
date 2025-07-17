// features/registration/components/forms/BaseForm.tsx
'use client'

import { DefaultValues, Path, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { staggerVariants } from '@lib/animations'
import { Button } from '@ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form'
import { Input } from '@ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select'
import { motion } from 'motion/react'
import { z } from 'zod'
import { BaseField, FormData } from '../../types/forms'

interface BaseFormProps<T extends FormData> {
  baseFields: readonly BaseField[]
  specificFields: readonly BaseField[]
  schema: z.ZodType<T>
  onComplete: (data: T) => void
  defaultValues?: DefaultValues<T>
}

export function BaseForm<T extends FormData>({
  baseFields,
  specificFields,
  schema,
  onComplete,
  defaultValues,
}: BaseFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  const allFields = [...baseFields, ...specificFields]

  const renderField = (field: BaseField) => (
    <motion.div
      variants={staggerVariants.child}
      key={field.name}
      className="cursor-border"
    >
      <FormField
        control={form.control}
        name={field.name as Path<T>}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
              {field.type === 'select' ? (
                <Select
                  onValueChange={formField.onChange}
                  defaultValue={formField.value}
                >
                  <SelectTrigger className="rounded-sm focus:!ring-white">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options?.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  className="rounded-sm focus:!ring-white"
                  type={field.type}
                  placeholder={field.placeholder}
                  {...formField}
                />
              )}
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </motion.div>
  )

  return (
    <Form {...form}>
      <motion.form
        variants={staggerVariants.parent}
        initial="initial"
        animate="animate"
        onSubmit={form.handleSubmit(onComplete)}
        className="space-y-4"
      >
        <motion.div
          variants={staggerVariants.child}
          className="flex flex-col gap-4"
        >
          {allFields.map(renderField)}
        </motion.div>
        <motion.div variants={staggerVariants.child} className="pt-4">
          <Button
            type="submit"
            className="w-full rounded-full bg-white hover:bg-white/90"
          >
            {"S'inscrire"}
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  )
}
