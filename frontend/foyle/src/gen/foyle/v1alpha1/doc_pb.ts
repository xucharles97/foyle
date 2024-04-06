// @generated by protoc-gen-es v1.8.0 with parameter "target=ts,import_extension=none"
// @generated from file foyle/v1alpha1/doc.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum BlockKind
 */
export enum BlockKind {
  /**
   * @generated from enum value: UNKNOWN_BLOCK_KIND = 0;
   */
  UNKNOWN_BLOCK_KIND = 0,

  /**
   * @generated from enum value: MARKUP = 1;
   */
  MARKUP = 1,

  /**
   * @generated from enum value: CODE = 2;
   */
  CODE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(BlockKind)
proto3.util.setEnumType(BlockKind, "BlockKind", [
  { no: 0, name: "UNKNOWN_BLOCK_KIND" },
  { no: 1, name: "MARKUP" },
  { no: 2, name: "CODE" },
]);

/**
 * Doc represents a document in the editor.
 *
 * @generated from message Doc
 */
export class Doc extends Message<Doc> {
  /**
   * @generated from field: repeated Block blocks = 1;
   */
  blocks: Block[] = [];

  constructor(data?: PartialMessage<Doc>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Doc";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "blocks", kind: "message", T: Block, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Doc {
    return new Doc().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Doc {
    return new Doc().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Doc {
    return new Doc().fromJsonString(jsonString, options);
  }

  static equals(a: Doc | PlainMessage<Doc> | undefined, b: Doc | PlainMessage<Doc> | undefined): boolean {
    return proto3.util.equals(Doc, a, b);
  }
}

/**
 * Block represents a block in a document.
 * It is inspired by the VSCode NotebookCellData type
 * https://github.com/microsoft/vscode/blob/98332892fd2cb3c948ced33f542698e20c6279b9/src/vs/workbench/api/common/extHostTypes.ts#L3598
 *
 * @generated from message Block
 */
export class Block extends Message<Block> {
  /**
   * BlockKind is an enum indicating what type of block it is e.g text or output
   * It maps to VSCode's NotebookCellKind
   * https://github.com/microsoft/vscode/blob/98332892fd2cb3c948ced33f542698e20c6279b9/src/vs/workbench/api/common/extHostTypes.ts#L3766
   *
   * @generated from field: BlockKind kind = 1;
   */
  kind = BlockKind.UNKNOWN_BLOCK_KIND;

  /**
   * language is a string identifying the language. 
   * It maps to languageId
   * https://github.com/microsoft/vscode/blob/98332892fd2cb3c948ced33f542698e20c6279b9/src/vs/workbench/api/common/extHostTypes.ts#L3623
   *
   * @generated from field: string language = 2;
   */
  language = "";

  /**
   * contents is the actual contents of the block.
   * Not the outputs of the block.
   * It corresponds to the value in NotebookCellData
   *
   * @generated from field: string contents = 3;
   */
  contents = "";

  /**
   * outputs are the output of a block if any.
   *
   * @generated from field: repeated BlockOutput outputs = 4;
   */
  outputs: BlockOutput[] = [];

  /**
   * IDs of any traces associated with this block.
   *
   * @generated from field: repeated string trace_ids = 6;
   */
  traceIds: string[] = [];

  constructor(data?: PartialMessage<Block>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "Block";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kind", kind: "enum", T: proto3.getEnumType(BlockKind) },
    { no: 2, name: "language", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "contents", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "outputs", kind: "message", T: BlockOutput, repeated: true },
    { no: 6, name: "trace_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Block {
    return new Block().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Block {
    return new Block().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Block {
    return new Block().fromJsonString(jsonString, options);
  }

  static equals(a: Block | PlainMessage<Block> | undefined, b: Block | PlainMessage<Block> | undefined): boolean {
    return proto3.util.equals(Block, a, b);
  }
}

/**
 * BlockOutput represents the output of a block.
 * It corresponds to a VSCode NotebookCellOutput
 * https://github.com/microsoft/vscode/blob/98332892fd2cb3c948ced33f542698e20c6279b9/src/vscode-dts/vscode.d.ts#L14835
 *
 * @generated from message BlockOutput
 */
export class BlockOutput extends Message<BlockOutput> {
  /**
   * items is the output items. Each item is the different representation of the same output data
   *
   * @generated from field: repeated BlockOutputItem items = 1;
   */
  items: BlockOutputItem[] = [];

  constructor(data?: PartialMessage<BlockOutput>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "BlockOutput";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "items", kind: "message", T: BlockOutputItem, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockOutput {
    return new BlockOutput().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockOutput {
    return new BlockOutput().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockOutput {
    return new BlockOutput().fromJsonString(jsonString, options);
  }

  static equals(a: BlockOutput | PlainMessage<BlockOutput> | undefined, b: BlockOutput | PlainMessage<BlockOutput> | undefined): boolean {
    return proto3.util.equals(BlockOutput, a, b);
  }
}

/**
 * BlockOutputItem represents an item in a block output.
 * It corresponds to a VSCode NotebookCellOutputItem
 * https://github.com/microsoft/vscode/blob/98332892fd2cb3c948ced33f542698e20c6279b9/src/vscode-dts/vscode.d.ts#L14753
 *
 * @generated from message BlockOutputItem
 */
export class BlockOutputItem extends Message<BlockOutputItem> {
  /**
   * mime is the mime type of the output item.
   *
   * @generated from field: string mime = 1;
   */
  mime = "";

  /**
   * value of the output item.
   * We use string data type and not bytes because the JSON representation of bytes is a base64 string.
   * vscode data uses a byte. We may need to add support for bytes to support non text data data in the future.
   *
   * @generated from field: string text_data = 2;
   */
  textData = "";

  constructor(data?: PartialMessage<BlockOutputItem>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "BlockOutputItem";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "mime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "text_data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockOutputItem {
    return new BlockOutputItem().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockOutputItem {
    return new BlockOutputItem().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockOutputItem {
    return new BlockOutputItem().fromJsonString(jsonString, options);
  }

  static equals(a: BlockOutputItem | PlainMessage<BlockOutputItem> | undefined, b: BlockOutputItem | PlainMessage<BlockOutputItem> | undefined): boolean {
    return proto3.util.equals(BlockOutputItem, a, b);
  }
}
