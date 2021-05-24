/**
 * @jest-environment jsdom
 */

import { expect } from '@jest/globals';
import {pushToHistory} from '../scripts/router.js';

describe('router tests', () => {
    test('settings test', () => {
        expect(pushToHistory('settings', -1)).toEqual(
            expect.objectContaining({
                state: expect.objectContaining(
                    {page: expect.stringMatching('settings')}
                )
            }) //what should this actually return?
        );
    });
    test('entry test', () => {
        expect(pushToHistory('entry', 3)).toEqual(
            expect.objectContaining({
                state: expect.objectContaining(
                    {page: expect.stringMatching('entry3')}
                )
            }) //what should this actually return?
        );
    });
    test('entry random', () => {
        expect(pushToHistory('random', 57)).toEqual(
            expect.objectContaining({
                state: expect.not.objectContaining(
                    {page: expect.stringMatching('random57')}
                )
            }) //what should this actually return?
        );
    });
});
