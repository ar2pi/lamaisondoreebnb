import type { CollectionConfig } from 'payload'

export const Rooms: CollectionConfig = {
  slug: 'rooms',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'capacity',
      label: 'Max capacity',
      type: 'number',
      defaultValue: 2,
    },
    {
      name: 'price',
      label: 'Price / night',
      type: 'number',
      required: true,
    },
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'is_available',
      label: 'Is available',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
