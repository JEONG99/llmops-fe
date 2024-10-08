import { Model, PlaygroundHistory, Prompt, Server } from "@/types";

export const MODEL_LIST: Model[] = [
  {
    id: 1,
    name: "sample-model_02",
    base_model: "llama-3.1",
    status: "done",
    tags: "마취과,내과",
    created_at: "2024-03-20",
    description: "회의록 요약",
    learning_rate: 0.0001,
    epochs: 3,
    batch_size: 8,
    bleu: 0.94,
    rouge_1: 0.96,
    rouge_2: 0.91,
    rouge_l: 0.95,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 01",
    verification_data: "verification_data 01",
    tuning_method: "QLoRA",
    amsgrad: false,
  },
  {
    id: 2,
    name: "sample-model_01",
    base_model: "llama-3.1",
    status: "progress",
    tags: "마취과",
    created_at: "2024-03-23",
    description: "4개월 태아 초음파 사진에 관한 모델입니다.",
    learning_rate: 0.001,
    epochs: 4,
    batch_size: 4,
    bleu: 0.93,
    rouge_1: 0.95,
    rouge_2: 0.89,
    rouge_l: 0.94,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 02",
    verification_data: "verification_data 02",
    tuning_method: "LoRA",
    amsgrad: false,
  },
  {
    id: 3,
    name: "sample-model_03",
    base_model: "llama-3",
    status: "failed",
    tags: "마취과,내과",
    created_at: "2024-03-25",
    description: "",
    learning_rate: 0.0001,
    epochs: 2,
    batch_size: 6,
    bleu: 0.92,
    rouge_1: 0.95,
    rouge_2: 0.89,
    rouge_l: 0.93,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 03",
    verification_data: "verification_data 03",
    tuning_method: "LoRA",
    amsgrad: false,
  },
  {
    id: 4,
    name: "sample-model_06",
    base_model: "llama-3",
    status: "done",
    tags: "마취과,내과",
    created_at: "2024-03-23",
    description: "보고서 생성",
    learning_rate: 0.0001,
    epochs: 3,
    batch_size: 8,
    bleu: 0.94,
    rouge_1: 0.96,
    rouge_2: 0.91,
    rouge_l: 0.95,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 04",
    verification_data: "verification_data 04",
    tuning_method: "풀파인튜닝",
    amsgrad: false,
  },
  {
    id: 5,
    name: "sample-model_05",
    base_model: "gpt-3.5",
    status: "progress",
    tags: "마취과,내과",
    created_at: "2024-03-22",
    description: "보고서 생성",
    learning_rate: 0.001,
    epochs: 4,
    batch_size: 4,
    bleu: 0.93,
    rouge_1: 0.95,
    rouge_2: 0.89,
    rouge_l: 0.94,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 05",
    verification_data: "verification_data 05",
    tuning_method: "풀파인튜닝",
    amsgrad: false,
  },
  {
    id: 6,
    name: "sample-model_04",
    base_model: "gpt-3.5",
    status: "failed",
    tags: "",
    created_at: "2024-03-27",
    description:
      "긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명긴설명",
    learning_rate: 0.0001,
    epochs: 2,
    batch_size: 6,
    bleu: 0.92,
    rouge_1: 0.95,
    rouge_2: 0.89,
    rouge_l: 0.93,
    beta1: 0.9,
    beta2: 0.999,
    epsilon: 0.000001,
    weight_decay: 0,
    learning_data: "learning_data 06",
    verification_data: "verification_data 06",
    tuning_method: "QLoRA",
    amsgrad: false,
  },
];

export const PROMPT_LIST: Prompt[] = [
  {
    id: 0,
    title: "보고서 요약",
    description:
      "보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트",
    created_at: "2024-02-12",
    base_model: MODEL_LIST[0],
    instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오.",
    data: "learning_data 01",
    temperature: 0,
    samples: [
      {
        input: "그래픽, 네이비, 레터링, 코튼",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
    ],
    result:
      "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 d자연스러운 연출이 가능합니다.",
    checked: true,
  },
  {
    id: 1,
    title: "보고서 요약",
    description:
      "보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트",
    created_at: "2024-02-12",
    base_model: MODEL_LIST[1],
    instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오.",
    data: "learning_data 01",
    temperature: 0,
    samples: [
      {
        input: "그래픽, 네이비, 레터링, 코튼",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
    ],
    result:
      "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 d자연스러운 연출이 가능합니다.",
    checked: true,
  },
  {
    id: 2,
    title: "보고서 요약",
    description:
      "보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트",
    created_at: "2024-02-12",
    base_model: MODEL_LIST[2],
    instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오.",
    data: "learning_data 01",
    temperature: 0,
    samples: [
      {
        input: "그래픽, 네이비, 레터링, 코튼",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
    ],
    result:
      "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 d자연스러운 연출이 가능합니다.",
    checked: false,
  },
  {
    id: 3,
    title: "보고서 요약",
    description:
      "보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는 프롬프트",
    created_at: "2024-02-12",
    base_model: MODEL_LIST[3],
    instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오.",
    data: "learning_data 01",
    temperature: 0,
    samples: [
      {
        input: "그래픽, 네이비, 레터링, 코튼",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
    ],
    result:
      "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 d자연스러운 연출이 가능합니다.",
    checked: false,
  },
];

export const SERVER_LIST: Server[] = [
  {
    id: 0,
    title: "inference_server_0",
    gpu_id: 0,
    deploy_model: MODEL_LIST[0],
    service: "기록지 생성",
  },
  {
    id: 1,
    title: "inference_server_1",
    gpu_id: 0,
    deploy_model: MODEL_LIST[1],
    service: "기록지 생성",
  },
  {
    id: 2,
    title: "inference_server_2",
    gpu_id: 0,
    deploy_model: MODEL_LIST[2],
    service: "기록지 생성",
  },
  {
    id: 3,
    title: "inference_server_3",
    gpu_id: 0,
    deploy_model: MODEL_LIST[4],
    service: "기록지 생성",
  },
];

export const HISTORY_LIST: PlaygroundHistory[] = [
  {
    id: 0,
    input: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
    created_at: "2024-02-12 15:33",
    prompts: [
      {
        base_model: MODEL_LIST[0],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
    ],
  },
  {
    id: 1,
    input: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
    created_at: "2024-02-12 15:33",
    prompts: [
      {
        base_model: MODEL_LIST[0],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
      {
        base_model: MODEL_LIST[1],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 자연스러운 연출이 가능합니다.",
      },
    ],
  },
  {
    id: 2,
    input: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
    created_at: "2024-02-12 15:33",
    prompts: [
      {
        base_model: MODEL_LIST[0],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
      },
      {
        base_model: MODEL_LIST[1],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 자연스러운 연출이 가능합니다.",
      },
      {
        base_model: MODEL_LIST[2],
        instruction: "주어진 패션 상품에 어울리는 상품 설명을 만드시오",
        output:
          "심플한 디자인의 네이비 반소매 티셔츠로, 부드러운 코튼 소재가 편안한 착용감을 제공합니다. 유니크한 그래픽과 레터링이 포인트가 되어 다양한 코디에 쉽게 어울립니다.",
      },
    ],
  },
];

export const LEARNING_DATA_LIST = [
  "learning_data 01",
  "learning_data 02",
  "learning_data 03",
  "learning_data 04",
  "learning_data 05",
  "learning_data 06",
];

export const VERIFICATION_DATA_LIST = [
  "verification_data 01",
  "verification_data 02",
  "verification_data 03",
  "verification_data 04",
  "verification_data 05",
  "verification_data 06",
];
