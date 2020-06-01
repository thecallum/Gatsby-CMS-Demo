import Counter, { schema as CounterSchema } from "./counter";
import Image, { schema as ImageSchema } from "./image";
import TextInput, { schema as TextInputSchema } from "./textInput";

export default {
  Counter,
  Image,
  TextInput,
};

export const schema = {
  Counter: CounterSchema,
  Image: ImageSchema,
  TextInput: TextInputSchema,
};
