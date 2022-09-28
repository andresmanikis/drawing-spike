import { Box } from "./Box.js";
import { Handles } from "./Handles.js";

const boxes = [new Box(200, 100, "blue"), new Box(400, 200, "green")];

new Handles(boxes[0]);
