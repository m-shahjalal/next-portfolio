import Particles from '@/Components/Particles/Particles'
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/particles.json', 'utf8');

  return (
    <Particles options={JSON.parse(file)} />
  )
}
