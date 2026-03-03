export interface VideoFile {
  id: string
  name: string
  size: number
  type: string
  file: File
}

export interface RecapSettings {
  duration: number // בשניות
  intervalSeconds: number // כל כמה שניות לחתוך
  captureSeconds: number // כמה שניות לקחת בכל פעם
  script: string
  apiKey: string
}

export interface ProcessingStatus {
  stage: 'loading_engine' | 'analyzing_video' | 'extracting_frames' | 'generating_description' | 'cutting_video' | 'generating_script' | 'generating_audio' | 'saving' | 'completed' | 'error'
  progress: number
  message: string
  output?: RecapOutput
}

export interface Stats {
  recapsCreated: number
  activeUsers: number
  uptime: number
  rating: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface RecapOutput {
  videoUrl: string;
  script: string;
}

export interface SavedRecap {
  id: string;
  created_at: string;
  script: string;
  video_path: string;
  description: string | null;
  visitor_id: string | null;
}
