import { GEMINI_API_KEY} from "./constants";

import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default genAI;