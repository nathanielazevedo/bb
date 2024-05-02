import React, { useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'

const MultiSelectWithSearch = () => {
  const [selectedOptions, setSelectedOptions] = useState([])

  // Sample options for demonstration
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
  ]

  return (
    <Autocomplete
      multiple
      id='multi-select-demo'
      options={options}
      value={selectedOptions}
      onChange={(event, newValue) => {
        setSelectedOptions(newValue)
      }}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          label='Multi-select with search'
        />
      )}
    />
  )
}

export default MultiSelectWithSearch
