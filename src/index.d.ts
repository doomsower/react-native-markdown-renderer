// tslint:disable:max-classes-per-file
import { MarkdownIt, Token } from 'markdown-it';
import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export interface MarkdownProps {
  rules?: RenderRules;
  style?: StyleSheet.NamedStyles<any>;
  renderer?: AstRenderer;
  markdownit?: MarkdownIt;
  plugins?: Array<PluginContainer<any>>;
}

class Markdown extends Component<MarkdownProps, {}>{}

export function getUniqueID(): string;
export function openUrl(url: string): void;

export function hasParents(parents: any[], type: string): boolean;

export type RenderFunction = (
  node: any,
  children: Component[],
  parent: Component,
  styles: any,
) => Component;

export interface RenderRules {
  [name: string]: RenderFunction;
}

export const renderRules: RenderRules;

export interface MarkdownParser {
  parse: (value: string, options: any) => Token[];
}

export interface ASTNode {
  type: string;
  sourceType: string; // original source token name
  key: string;
  content: string;
  tokenIndex: number;
  index: number;
  attributes: Record<string, any>;
  children: ASTNode[];
}

export class AstRenderer {
  constructor(renderRules: RenderRules, style?: any);
  getRenderFunction(type: string): RenderFunction;
  renderNode(node: any, parentNodes: ReadonlyArray<any>): Component;
  render(nodes: ReadonlyArray<any>): View;
}

export function parser(
  source: string,
  renderer: (node: ASTNode) => View,
  parser: MarkdownParser,
): any;

export function stringToTokens(
  source: string,
  markdownIt: MarkdownParser,
): Token[];

export function tokensToAST(tokens: ReadonlyArray<Token>): ASTNode[];

interface PluginContainerResult<A> {
  [index: number]: any;
  0: A;
}

export class PluginContainer<A> {
  constructor(plugin: A, ...options: any[]);
  toArray(): [A, any];
}

export function blockPlugin(md: any, name: string, options: object): any;

export const styles: any;

export default Markdown;