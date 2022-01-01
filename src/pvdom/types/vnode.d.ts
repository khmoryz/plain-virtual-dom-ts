export default interface VNode {
  tagName: string;
  attributes: { id: string; content: string; [key: string]: string };
  children?: Array<VNode>;
}
