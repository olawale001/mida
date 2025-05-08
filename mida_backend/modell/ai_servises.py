from transformers import pipeline


summerizer = pipeline("summarization")
ner = pipeline('ner', model="dbmdz/bert-large-cased-finetuned-conll03-english")

sentiment = pipeline("sentiment-analysis")

def generate_summary(text):
    result = summerizer(text, max_length=100, min_legth=30, do_sample=False)
    return result[0]['summary_text']

def nlp_analysis(text):
    entities = ner(text)
    sentiments = sentiment(text)
    return {
        'entities': entities,
        'sentiment': sentiments
    }