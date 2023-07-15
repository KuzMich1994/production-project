const firstCharUpperCase = require('../firstCharUpperCase');
const toCamelCase = require('../toCamelCase');

module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(toCamelCase(sliceName))}Schema`;

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}-schema';

const initialState: ${typeName} = {};

export const ${firstCharUpperCase(toCamelCase(sliceName))}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const {
  actions: ${firstCharUpperCase(toCamelCase(sliceName))}Actions,
} = ${firstCharUpperCase(toCamelCase(sliceName))}Slice;
export const {
  reducer: ${firstCharUpperCase(toCamelCase(sliceName))}Reducer,
} = ${firstCharUpperCase(toCamelCase(sliceName))}Slice;`;
};
