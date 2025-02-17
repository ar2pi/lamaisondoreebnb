import type { CollectionConfig } from 'payload'

export const Reservations: CollectionConfig = {
  slug: 'reservations',
  admin: {
    useAsTitle: 'first_name',
  },
  fields: [
    {
      name: 'first_name',
      label: 'First name',
      type: 'text',
      required: true,
    },
    {
      name: 'last_name',
      label: 'Last name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone_number',
      label: 'Phone number',
      type: 'text',
      required: true,
    },
    {
      name: 'rooms',
      type: 'relationship',
      relationTo: 'rooms',
      hasMany: true,
      required: true,
    },
    {
      name: 'check_in_date',
      label: 'Check-in date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'check_out_date',
      label: 'Check-out date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'nights',
      type: 'number',
    },
    {
      name: 'total_price',
      label: 'Total price',
      type: 'number',
    },
    {
      name: 'payment_id',
      label: 'Payment ID',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create') {
          req.payload
            // @TODO: configure proper reservation email
            // https://payloadcms.com/docs/email/overview
            .sendEmail({
              from: 'sender@example.com',
              html: `<p>Hi ${doc.first_name}! Reservation confirmed.</p>`,
              subject: 'Reservation confirmed!',
              to: doc.email,
            })
            .catch((error) => {
              console.error('Error sending email:', error)
            })
        }
      },
    ],
  },
}
