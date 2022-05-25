# React_Picture-in-Picture_PIP

[![NPM](https://img.shields.io/npm/v/react-picture-in-picture.svg)](https://www.npmjs.com/package/react-picture-in-picture) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


프로젝트 실행방법.

### `01. npm install`

### `02. npm start`

## Props

Here the list of all props :

| Name                     | type         | Description                                                  | Is required ? | Default value |
| ------------------------ | ------------ | ------------------------------------------------------------ | ------------- | ------------- |
| id                       | string       | set a custom id to the video player                          | no            | 'videopip'    |
| isActive                 | boolean      | state that allow to turn on or of the pip mode               | no            | false         |
| callBackSuccessOnEnable  | function     | function that would be called if the media where successfully go to pip mode | no            | :x:           |
| callBackSuccessOnDisable | function     | function called when the pip mode is successfully disabled   | no            | :x:           |
| style                    | style object | style that would be apply to the video element               | no            | :x:           |
| className                | string       | className that would be apply to the video element           | no            | :x:           |
| autoplay                 | boolean      | enable autoplay on the video player                          | no            | false         |
| controls                 | boolean      | enable or not video controls                                 | no            | true          |
| children                 | node         | children element that can be include between the element (eg : < source > tag) | no            | :x:           |
| loop                     | boolean      | enable loop play on the video                                | no            | false         |
| muted                    | boolean      | mute the video player sound                                  | no            | false         |
| classOnEnable            | string       | css class that would be activate on the video player when pip mode is enable | no            | :x:           |



## License

MIT © [Thomascogez](https://github.com/Thomascogez)
