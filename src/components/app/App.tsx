import { CSSProperties, useState } from 'react';
import { Article } from 'src/components/article/Article';
import { ArticleParamsForm } from 'src/components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import styles from './App.module.scss';

export const App = () => {
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(defaultArticleState);

	function onChange(selectArticleState: ArticleStateType): void {
		setSelectArticleState(selectArticleState);
	}

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': selectArticleState.fontFamilyOption.value,
					'--font-size': selectArticleState.fontSizeOption.value,
					'--font-color': selectArticleState.fontColor.value,
					'--container-width': selectArticleState.contentWidth.value,
					'--bg-color': selectArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				onChange={(selectArticleState) => {
					onChange(selectArticleState);
				}}
			/>
			<Article />
		</main>
	);
};
