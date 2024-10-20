package api

type ModelProvider string

const (
	ModelProviderReplicate ModelProvider = "replicate"
	ModelProviderAnthropic ModelProvider = "anthropic"
	ModelProviderOpenAI    ModelProvider = "openai"
	ModelProviderDefault   ModelProvider = "openai"
	ModelProviderUnknown   ModelProvider = "unknown"
)

type AgentConfig struct {
	// Model is the name of the model to use to generate completions
	Model string `json:"model" yaml:"model"`
	// ModelProvider is the provider of the model
	ModelProvider ModelProvider `json:"modelProvider" yaml:"modelProvider"`

	// RAG is the configuration for the RAG model
	RAG *RAGConfig `json:"rag,omitempty" yaml:"rag,omitempty"`

	// EvalMode is whether to run in evaluation mode or not.
	// In EvalMode logs are specially marked so requests won't be used for training.
	EvalMode bool `json:"evalMode" yaml:"evalMode"`

	// Name is the name assigned to the agent by the user
	Name string `json:"name,omitempty" yaml:"name,omitempty"`
}

// RAGConfig configures the RAG model
type RAGConfig struct {
	// Enabled is whether to enable the RAG model or not
	Enabled bool `json:"enabled" yaml:"enabled"`
	// MaxResults is the maximum number of results to return
	MaxResults int `json:"maxResults" yaml:"maxResults"`
}
