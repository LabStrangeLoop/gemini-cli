/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  GenerateContentConfig,
  PartListUnion,
  Content,
  GenerateContentResponse,
} from '@google/genai';
import type { ServerGeminiStreamEvent, ChatCompressionInfo } from './turn.js';
import { Turn, CompressionStatus } from './turn.js';
import type { Config } from '../config/config.js';
import type { ChatRecordingService } from '../services/chatRecordingService.js';
import { LoopDetectionService } from '../services/loopDetectionService.js';
import { GeminiChat } from './geminiChat.js';

export class OpenAIClient {
  constructor(private readonly config: Config) {}

  async initialize() {
    return Promise.resolve();
  }

  async addHistory(content: Content) {
    return Promise.resolve();
  }

  getChat(): GeminiChat {
    throw new Error('Not implemented');
  }

  isInitialized(): boolean {
    return false;
  }

  getHistory(): Content[] {
    return [];
  }

  stripThoughtsFromHistory() {}

  setHistory(history: Content[]) {}

  async setTools(): Promise<void> {
    return Promise.resolve();
  }

  async resetChat(): Promise<void> {
    return Promise.resolve();
  }

  getChatRecordingService(): ChatRecordingService | undefined {
    return undefined;
  }

  getLoopDetectionService(): LoopDetectionService {
    throw new Error('Not implemented');
  }

  async addDirectoryContext(): Promise<void> {
    return Promise.resolve();
  }

  async startChat(extraHistory?: Content[]): Promise<GeminiChat> {
    throw new Error('Not implemented');
  }

  async *sendMessageStream(
    request: PartListUnion,
    signal: AbortSignal,
    prompt_id: string,
    turns?: number,
  ): AsyncGenerator<ServerGeminiStreamEvent, Turn> {
    yield* (async function* () {})();
    throw new Error('Not implemented');
  }

  async generateContent(
    contents: Content[],
    generationConfig: GenerateContentConfig,
    abortSignal: AbortSignal,
    model: string,
  ): Promise<GenerateContentResponse> {
    throw new Error('Not implemented');
  }

  async tryCompressChat(
    prompt_id: string,
    force?: boolean,
  ): Promise<ChatCompressionInfo> {
    return {
      compressionStatus: CompressionStatus.NOOP,
      originalTokenCount: 0,
      newTokenCount: 0,
    };
  }
}