import type { AnswerVariant } from '~/modules/quiz/types'

const letters = ['A', 'B', 'C', 'D']

export const assignLettersToItems = (items: AnswerVariant[]) => {
	return items.map((item, index) => ({
		...item,
		letter: letters[index % letters.length],
	}))
}
