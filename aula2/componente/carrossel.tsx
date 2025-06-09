'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type CarrosselImagemProps = {
  imagens: string[];
};

export default function CarrosselImagem({ imagens }: CarrosselImagemProps) {
  return (
    <div className="w-[400px] h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        className="swiper-custom"
      >
        {imagens.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px]">
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
