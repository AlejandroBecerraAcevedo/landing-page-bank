import Image from "next/image";
import { Inter } from "next/font/google";
import Button from '@/components/atoms/buttons/index';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button/>          
    </div>
  );
}
