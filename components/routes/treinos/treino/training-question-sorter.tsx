'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Prisma } from '@prisma/client';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TrainingQuestionSorterProps {
  questions: Array<Prisma.QuestionGetPayload<{ include: { category: true } }>>;
}

export default function TrainingQuestionSorter({
  questions,
}: TrainingQuestionSorterProps) {
  const [currentQuestion, setCurrentQuestion] =
    useState<Prisma.QuestionGetPayload<{ include: { category: true } }> | null>(
      null,
    );
  const [counter, setCounter] = useState(0);
  const [sortedQuestionsIds, setSortedQuestionsIds] = useState<string[]>([]);
  const [isVisibleAnswer, setIsVisibleAnswer] = useState(false);

  function handleSort() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const newQuestion = questions[randomIndex];

    if (sortedQuestionsIds.includes(newQuestion.id)) {
      setTimeout(() => {
        handleSort();
      }, 300);
      return;
    }

    setCounter(counter + 1);
    setCurrentQuestion(newQuestion);
    setSortedQuestionsIds([...sortedQuestionsIds, newQuestion.id]);
    setIsVisibleAnswer(false);
  }

  function removeIdFromSortedQuestionsIds(id: string) {
    const newSortedQuestionsIds = sortedQuestionsIds.filter(
      (questionId) => questionId !== id,
    );

    setSortedQuestionsIds(newSortedQuestionsIds);
  }

  useEffect(() => {
    handleSort();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Questão #{counter}</CardTitle>
        <CardDescription className="capitalize">
          {currentQuestion?.category?.name || 'Sem categoria'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>{currentQuestion?.question}</p>
          {isVisibleAnswer && (
            <p className="text-sm text-muted-foreground">
              {currentQuestion?.answer}
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-4 md:flex-row">
        <Button
          variant="outline"
          onClick={() => setIsVisibleAnswer(!isVisibleAnswer)}
          className="w-full md:w-auto"
        >
          {isVisibleAnswer ? (
            <>
              <EyeOff className="mr-2 h-4 w-4" />
              <span>Esconder resposta</span>
            </>
          ) : (
            <>
              <Eye className="mr-2 h-4 w-4" />
              <span>Mostrar resposta</span>
            </>
          )}
        </Button>
        <div className="flex w-full gap-x-4 md:w-auto">
          <Button
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => {
              if (currentQuestion?.id) {
                removeIdFromSortedQuestionsIds(currentQuestion.id);
              }
            }}
          >
            Repetir
          </Button>
          <Button
            className="w-full md:w-auto"
            onClick={() => handleSort()}
            disabled={sortedQuestionsIds.length === questions.length}
          >
            Próxima
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
