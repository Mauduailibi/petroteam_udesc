import { getCategoriesMap } from '@/actions/categories/actions';
import { getAllQuestions } from '@/actions/questions/actions';
import { QuestionsColumns } from '@/components/routes/questoes/questions-columns';
import { QuestionsDataTable } from '@/components/routes/questoes/questions-data-table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getPlayer } from '@/data/player';

export default async function QuestoesPage() {
  const player = await getPlayer();

  if (!player) return null;

  if (player?.isActive === false) {
    return (
      <div className="flex justify-between">
        <p>Aguarde a ativação de sua conta</p>
      </div>
    );
  }

  const questions = await getAllQuestions();

  const categoriesMap: Record<string, string> = await getCategoriesMap();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Questões</h1>

      <Card>
        <CardHeader>
          <CardTitle>Banco de questões</CardTitle>
          <CardDescription>
            {questions.length} questões encontradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <QuestionsDataTable
            columns={QuestionsColumns}
            data={questions}
            categoriesMap={categoriesMap}
          />
        </CardContent>
      </Card>
    </div>
  );
}
